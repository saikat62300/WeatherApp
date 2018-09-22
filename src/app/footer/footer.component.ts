import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  current_year: any;

  constructor() {}

  ngOnInit() {
    var d = new Date();
    this.current_year = d.getFullYear();
  }
}
