import {Component, Input} from '@angular/core';
import { Hero } from '../hero';

@Component({
selector:'app-hero-child',
template: `
<h3>{{heroName.name}} says:</h3>
<p>I, {{heroName.name}}, am at your service, {{masterName}}.</p>
`
})

export class HeroChildComponent {
@Input() heroName;
@Input('master') masterName : string;

}