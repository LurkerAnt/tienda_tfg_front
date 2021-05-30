import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  footer = 'default';

  constructor(
    
    private router:Router
    
    ) { 
    
      this.router.events.subscribe(event => {
      // filtrs evemtos de `NavigationEnd`
      if (event instanceof NavigationEnd) {
        // consigue la ruta actual sin slash `/`
        const eventUrl = /(?<=\/).+/.exec(event.urlAfterRedirects);
        const currentRoute = (eventUrl || []).join('');
        // añade a footer el valor de la ruta
        this.footer = currentRoute;
      }
    });
  }

  ngOnInit(): void {
  }

}
