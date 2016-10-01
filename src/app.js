import Router from './router'
import Styles from './styles/main.styl'
import app from 'ampersand-app'
import SampleModel from './models/sampleModel'


window.app = app

app.extend ({
	init () {
		
		this.sampleModel = new SampleModel()
		this.router = new Router()
		this.router.history.start()
	}
})

app.init()


