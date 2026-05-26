import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  @Input() title!: string;
  @Input() subtitle?: string;
  @Input() context?: string;
  @Input() built?: string;
  @Input() keys?: string[];
  @Input() implementation?: string[];
  @Input() result?: string;
  @Input() role?: string;
  @Input() tech?: string[];
  @Input() platform?: string[];
  @Input() links?: string[];
  @Input() picUrl?: string;
  @Input() detail1?: string;
  @Input() detail2?: string;
  @Input() detail3?: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const slug = this.route.snapshot.paramMap.get('slug');

    console.log(slug);
  }

}
