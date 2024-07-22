
import { Base } from "../base";

export class Header extends Base {
  readonly header = this.locator('class="v-toolbar__content"');
  readonly userButton = this.header.locator('class="v-btn__content"');
}