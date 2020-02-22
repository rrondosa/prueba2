import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'popmenu',
  templateUrl: './popmenu.component.html',
  styleUrls: ['./popmenu.component.scss']
})
export class PopmenuComponent implements OnInit {
  openMenu: Boolean = false;
  mapaPrueba ="MapaPruebaPage";
  constructor(public navCtrl: NavController,private router: Router) { }

  ngOnInit() {
  }

  togglePopupMenu() {
    return this.openMenu = !this.openMenu;
  }
  goTo() {
    // this.router.navigate(['/map-restaurant'])
    
    this.navCtrl.navigateForward('map-restaurante');

  }

}
