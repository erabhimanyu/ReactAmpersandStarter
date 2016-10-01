import app from 'ampersand-app'
import Router from 'ampersand-router'
import React from 'react'
import xhr from 'xhr'
import Layout from './layout'
import config from './config'
import qs from 'qs'
import MessagePage from './components/message'

export default Router.extend({
	
		
	routes: {
	'':'public',
	'login': 'login',
	'auth/callback?:query': 'authcallback',
	'*fourOhFour':'fourOhFour'
	},
	public() {
		
		React.render(<Layout/>, document.body)
	},
	login() {
		window.location = 'https://github.com/login/oauth/authorize?' + qs.stringify({

			client_id : config.clientId,
			redirect_uri : window.location.origin + '/auth/callback',
			scope: 'user,repo'
		})
	},
	authcallback(query) {
		query = qs.parse(query)
		console.log(query)

		xhr({
			url: config.url + query.code,
			json: true
		}, (err, req, body)  => {
			console.log(body.token)
			this.redirectTo('/')
		})

		React.render(<MessagePage title='Fetching your page' body='Fetching data please hold tight!!!'/>)
	},
	fourOhFour() {
		React.render(<MessagePage title='Not Found' body='404. Nothing Found on the link you are trying'/>, document.body)
	}
})