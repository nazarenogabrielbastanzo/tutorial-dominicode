import { Component } from '@angular/core';

@Component({
  selector: 'app-thank-you-page',
  template: `
    <div class="container">
      <h1 class="title">Thank you!</h1>
      <p class="content">Your order is on the way!</p>
      <span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis delectus
        neque harum ipsa vel dignissimos non reprehenderit perspiciatis, qui
        impedit nostrum fuga aspernatur voluptates consequuntur consectetur
        autem minus temporibus. Perspiciatis.
      </span>
    </div>
  `,
  styleUrls: ['./thank-you-page.component.scss'],
})
export class ThankYouPageComponent {}
