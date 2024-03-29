'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Role extends Model {
    user(){
        return this.hasOne('App/Models/User')
    }
    static get hidden(){
        return ['created_at','updated_at']
    }
}

module.exports = Role
