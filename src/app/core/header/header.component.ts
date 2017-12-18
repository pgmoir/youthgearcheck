import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  topMenu = true;

  constructor(private afAuth: AngularFireAuth, private authService: AuthService, private router: Router) {}

  logout() {
    this.topMenu = true;
    this.afAuth.auth.signOut();
  }

  activateBurgerBun() {
    this.topMenu = !this.topMenu;
  }

  navigateAway(navigateTo: string) {
    this.topMenu = true;
    this.router.navigate([navigateTo]);
  }
}

// import { Component } from '@angular/core';
// import { Response } from '@angular/http';

// import { AuthService } from '../../auth/auth.service';
// import { DataStorageService } from '../../shared/data-storage.service';

// @Component({
//   selector: 'app-header',
//   templateUrl: './header.component.html',
//   styleUrls: ['./header.component.css']
// })
// export class HeaderComponent {

//   constructor(private dataStorageService: DataStorageService, private authService: AuthService) { }

//   onSaveData() {
//     // this.dataStorageService.storeBikes()
//     //   .subscribe(
//     //   (response: Response) => {
//     //     console.log(response);
//     //   }
//     //   );
//     // let newId = UUID.UUID();
//     // let kitCore = { id: newId, brand: 'Nike', color: 'white', type: 'trainer' };
//     // this.dataStorageService.storeKitCore(kitCore).subscribe((response: Response) => console.log(response));
//     // let kitAdv = { style: 'thin', length: 30, purchased: true };
//     // this.dataStorageService.storeKitAdv(newId, kitAdv).subscribe((response: Response) => console.log(response));

//     // newId = UUID.UUID();
//     // kitCore = { id: newId, brand: 'Adidas', color: 'brown', type: 'sleeper' };
//     // this.dataStorageService.storeKitCore(kitCore).subscribe((response: Response) => console.log(response));
//     // kitAdv = { style: 'medium', length: 35, purchased: true };
//     // this.dataStorageService.storeKitAdv(newId, kitAdv).subscribe((response: Response) => console.log(response));



//     // kit.push(kitCore);
//     // const secondId = UUID.UUID();
//     // kitCore = { id: secondId, brand: 'Adidas', color: 'blue', type: 'trainer' };
//     // kit.push(kitCore);
//     // this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/kit/list.json?auth=' + token, kit);
//     // this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/kit/advanced/' + firstId + '.json?auth=' + token, kitAdv);
//     // kitAdv = { style: 'thin', length: 30, purchased: true };
//     // return this.httpClient.put('https://youthgearcheck.firebaseio.com/' + uid + '/kit/advanced/' + secondId + '.json?auth=' + token, kitAdv);

//     // this.dataStorageService.storeKitCore().subscribe((response: Response) => console.log(response));
//     // this.dataStorageService.storeKitCore().subscribe((response: Response) => console.log(response));
//     // this.dataStorageService.storeKitCore().subscribe((response: Response) => console.log(response));
//   }

//   onFetchData() {
//     // this.dataStorageService.getBikes();
//   }

//   onLogout() {
//     this.authService.signOut();
//   }

//   isAuthenticated() {
//     return this.authService.authenticated;
//   }
// }
