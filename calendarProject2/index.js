
var submit = $('.submit');
var prevButt = $('.prev');
var nextButt = $('.next');
var cardContainer = $('.cardContainer');
var steps = $('.steps');
var input = $('.inp1');
var timeInput = $('.timeInput');

submit.on("click", showCalendar);
// submit.on("click", inputSteps);
function showCalendar() {
  steps.css("visibility","hidden")
  timeInput.css("visibility","hidden")

  // event.target.parentNode.remove(input);
  cardContainer.append(`<section class = "calendar">
  <div class="month">
  <ul>
    <button class="prev">&#10094;</button>
    <button class="next">&#10095;</button>
    <li>June<br><span style="font-size:18px">2019</span></li>
  </ul>
</div>

    <ul class="weekdays">
      <li>Mo</li>
      <li>Tu</li>
      <li>We</li>
      <li>Th</li>
      <li>Fr</li>
      <li>Sa</li>
      <li>Su</li>
    </ul>

    <ul class="days">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
      <li>5</li>
      <li>6</li>
      <li>7</li>
      <li>8</li>
      <li>9</li>
      <li><span class="active">10</span></li>
      <li>11</li>
      <li>12</li>
      <li>13</li>
      <li>14</li>
      <li>15</li>
      <li>16</li>
      <li>17</li>
      <li>18</li>
      <li>19</li>
      <li>20</li>
      <li>21</li>
      <li>22</li>
      <li>23</li>
      <li>24</li>
      <li>25</li>
      <li>26</li>
      <li>27</li>
      <li>28</li>
      <li>29</li>
      <li>30</li>
    </ul>

  </section>`)

}
// function removeItem(input) {
//   event.target.parentNode.remove(input);
// }
//
// function inputSteps {
//
// }

// prevButt.on("click", nextPage)
//
// function nextPage() {
//
// }
