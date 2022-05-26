import Image from "./Rectangle.svg";
import Heart from "./Vector.svg";

export default function Card(props) {
  return (
    <div class="grid-container">
      <div class="item2">
        <div class="image">
          <img src={Image} alt="crozo" />
        </div>
      </div>
      <div class="item3">Crozo Apparals</div>
      <div class="item4">
        <img src={Heart} alt="heart" />
      </div>
      <div class="man">
        <div class="man">Manufacturing since 2015</div>
      </div>
      <div class="expo">
        <div class="expo">Crozo Apparals</div>
      </div>
      <div class="eployees">
        <div class="eployees">Employees 50+</div>
      </div>
      <div class="item1">Footer</div>
    </div>
  );
}
