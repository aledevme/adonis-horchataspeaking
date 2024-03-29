'use strict'
const Quote = use('App/Models/Quote')


class QuoteController {
  /**
   * Show a list of all quotes.
   * GET quotes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
      const quote = await Quote.all()
      return view.render('index',{
        quotes:quote.toJSON()
      })
  }

  /**
   * Render a form to be used for creating a new quote.
   * GET quotes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
      return view.render('quotes.create-quote')
  }

  /**
   * Create/save a new quote.
   * POST quotes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response, auth, session, }) {
      const quote = await Quote.create({
        user_id:auth.user.id,
        username:auth.user.username,
        body:request.input('body')
      })

      session.flash({
        'successmessage':'Quote has been added'
      })

      return response.redirect('/')
  }

  /**
   * Display a single quote.
   * GET quotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing quote.
   * GET quotes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update quote details.
   * PUT or PATCH quotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a quote with id.
   * DELETE quotes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = QuoteController
