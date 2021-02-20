import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  status: boolean;
  windowClick: any;

  constructor() { }

  ngOnInit(): void {
    this.windowClick = (e) => {
      if (!e.target.matches('.main-menu')){
        const myDropdown = document.getElementById('main-menu');
        if (myDropdown.classList.contains('main-menu--open')) {
          myDropdown.classList.remove('main-menu--open');
          this.status = false;
        }
      }
    };
    window.addEventListener('click', this.windowClick);
  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy() {
    window.removeEventListener('click', this.windowClick);
  }

}
