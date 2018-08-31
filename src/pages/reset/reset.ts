import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the ResetPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-reset',
  templateUrl: 'reset.html',
})
export class ResetPage {

  person:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, private Fb: FormBuilder) {
    this.person = Fb.group({
      Email: ['',Validators.compose([ Validators.pattern('^[a-zA-Z_.+-]+@[a-zA-Z-]+.[a-zA-Z0-9-.]+$'),Validators.required])],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPage');
  }
  ResetPass({value, valid}:{value:any,valid}){
    console.log(value.Email);
    var auth = firebase.auth();
    var emailAddress = value.Email;
    
    auth.sendPasswordResetEmail(value.Email).then(function() {
      // Email sent.
    }).catch(function(error) {
      // An error happened.
    });
      }
}
