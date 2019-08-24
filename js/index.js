/////////////////////////////////////////////////


let $heading = $('.head');
let $secA = $('.section-a');
let $secB = $('.section-b');
let $secCpic = $('.section-c__picture');
let $secCtext = $('.section-c__text');
let $sec3 = $('.section-3');
let $sec4 = $('.section-4');





setTimeout(function () {
    $heading.addClass('js-show fadeInLeft animated');},
           100
);


$secA.waypoint(function () {
	$secA.addClass('js-show fadeInUp animated');
}, { offset: '90%'});

$secB.waypoint(function () {
	$secB.addClass('js-show fadeInUp animated');
}, { offset: '90%'});

$secCpic.waypoint(function () {
	$secCpic.addClass('js-show fadeInUp animated');
}, { offset: '90%'});
$secCtext.waypoint(function () {
	$secCtext.addClass('js-show fadeInUp animated');
}, { offset: '90%'});

$sec3.waypoint(function () {
	$sec3.addClass('js-show fadeInUp animated');
}, { offset: '90%'});

$sec4.waypoint(function () {
	$sec4.addClass('js-show fadeInUp animated');
}, { offset: '90%'});

