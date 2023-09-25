import { Component, Input } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-explore',
  templateUrl: './explore-container2.component.html',
  styleUrls: ['./explore-container2.component.scss'],
  standalone: true,
  imports: [CommonModule, IonicModule],
})
export class ExploreContainer2Component {

  @Input() name?: string;
  visible = true;

  onToggleChanged(s: string) {
    
  }
}
