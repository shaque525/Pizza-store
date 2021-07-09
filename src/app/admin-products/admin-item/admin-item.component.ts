import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-admin-item',
  templateUrl: './admin-item.component.html',
  styleUrls: ['./admin-item.component.scss']
})
export class AdminItemComponent implements OnInit {

  @Input() name:any;
  @Input() price:any;
  @Input() quantity:any;
  @Input() code:any;
  @Output() deleteCode = new EventEmitter<any>();

  constructor(private notificationService: NotificationService) {
  }

  ngOnInit(): void {
    
  }

  onDelete() {
    this.deleteCode.emit(this.code);
    this.notificationService.showNotification("Pizza Deleted Successfully");
  }

}
