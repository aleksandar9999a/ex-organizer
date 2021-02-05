import { Injectable } from "exf-ts";
import { BehaviorSubject } from "rxjs";

export const isOpenSidebar = new BehaviorSubject<boolean>(true);

export function openClose () {
  isOpenSidebar.next(!isOpenSidebar.value)
}

@Injectable()
export class SidebarController {
  isOpenSidebar: BehaviorSubject<boolean>;

  constructor () {
    this.isOpenSidebar = new BehaviorSubject<boolean>(true);
  }

  openClose = () => {
    this.isOpenSidebar.next(!this.isOpenSidebar.value)
  }
}