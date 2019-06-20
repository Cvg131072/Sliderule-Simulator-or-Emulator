var s = new Sliderule (1200, {hairline_top: -5, hairline_bottom: -5, cursor_left_extension: 0.08, cursor_right_extension: 0.08, cursorGlass: '#ffff0022', cursor_limit_left: 0.1 + HairlineS, cursor_limit_right: 0.1 + HairlineS, markings_background: '#ff2400', markings_colour: 'gold', cursor_markings_shift: 0.005});
sliderules . sliderules . push (s);
var floor = new VintageFloor (0.125, 0.125, 1, 1, 4, '#00000000', sliderules . wood_floor, 128 - 24, 128 + 24, 0.01);
floor . scales . push ({x: -0.125, y: 132, scale: new scale_StudyMate (24, {colour: 'gold', shift: -12.5, right_extension: 0.15})});
floor . markings . push (new Logo (sliderules . house_logo, -0.06, 128, 0.5));
floor . markings . push (new Logo (sliderules . house_logo, 1.06, 128, 0.5));
floor . markings . push (new Engraving (sliderules . motto, '20px snell', 'center', '#ff2400', 0.5, 120))
s . backBraces . push (floor);
s . cursorBraces . push (new DecilonWindow (8, 0.08, 0.076, 0.06, -2, -4, -30, 'gold', 'red'));
//s . cursorGlassBraces . push (new RuleSupport (0, 14, 22, 0.18, 4, 'silver', 'gold'));
//s . cursorBraces . push (new DecilonCursorBrace (-26, 0.09, -16, 8, 0.04, -10, 4, 'tan', 'black'));
s . cursorBraces . push (new HLine (18, -0.08, -0.06, 'red'));
s . cursorBraces . push (new HLine (20, -0.08, -0.06, 'red'));
s . cursorBraces . push (new HLine (18, 0.08, 0.06, 'red'));
s . cursorBraces . push (new HLine (20, 0.08, 0.06, 'red'));
s . cursorBraces . push (new HLine (17, -0.06, 0.06, 'lime'));
s . cursorBraces . push (new HLine (21, -0.06, 0.06, 'lime'));
s . cursorBraces . push (new HLine (238, -0.08, -0.06, 'red'));
s . cursorBraces . push (new HLine (236, -0.08, -0.06, 'red'));
s . cursorBraces . push (new HLine (238, 0.08, 0.06, 'red'));
s . cursorBraces . push (new HLine (236, 0.08, 0.06, 'red'));
s . cursorBraces . push (new HLine (239, -0.06, 0.06, 'lime'));
s . cursorBraces . push (new HLine (235, -0.06, 0.06, 'lime'));
s . cursorBraces . push (new Engraving (sliderules . house, '18px snell', 'right', 'gold', 0, 38));
s . cursors . push (new Cursor (HairlineS, 5, 16, 'red', {marking_shift: -0.005, marking_align: 'right'}));
s . cursors . push (new Cursor (HairlineS, 240, 251, 'red', {marking_shift: -0.005, marking_align: 'right'}));
s . cursors . push (new Cursor (HairlineS, 20 + 48 + 2, 20 + 48 + 48 - 2, 'lime', {marking_shift: -0.005, marking_align: 'right'}));
s . cursors . push (new Cursor (HairlineS, 46, 66, 'red', {marking_shift: -0.005, marking_align: 'right'}));
s . cursors . push (new Cursor (HairlineS, 118, 230, 'red', {marking_shift: -0.005, marking_align: 'right'}));
s . cursors . push (new Cursor (HairlineD, 5, 16, 'red', {marking_shift: 0.005}));
s . cursors . push (new Cursor (HairlineD, 240, 251, 'red', {marking_shift: 0.005}));
s . cursors . push (new Cursor (HairlineD, 20 + 72 + 48 + 2, 20 + 72 + 96 - 2, 'lime', {marking_shift: 0.005}));
s . cursors . push (new Cursor (HairlineD, 46, 138, 'red', {marking_shift: 0.005}));
s . cursors . push (new Cursor (HairlineD, 190, 230, 'red', {marking_shift: 0.005}));
var r = new Rule ({v_scaling: 0.5, rule_colour: sliderules . wood, left_margin: 0.12, right_margin: 0.12}); s . rules . push (r);
r . scales . push (new scale_Metric_down (24, {colour: 'gold', scale: 25.4, shift: -2.54, right_extension: 0.1008}));
r . scales . push (new spacer (12));

s . rules . push (new spacer (2));

r = new Rule ({rule_colour: sliderules . wood, left_margin: 0.12, right_margin: 0.12}); s . rules . push (r);
r . markings . push (new Engraving (sliderules . house + ' House', '24px snell', 'center', '#ff2400', 0.5, 20));
r . scales . push (new spacer (24));
//r . scales . push (new scale_L (24, {colour: 'gold'}));
//r . scales . push (new scale_P (24, {colour: 'gold'}));
r . scales . push (new scale_K (24, {colour: 'gold', left_extension: 0.076, right_extension: 0.069, alt: 'green', marking_alt: 'red'}));
r . scales . push (new scale_A (24, {colour: 'gold', left_extension: 0.08, right_extension: 0.076, alt: 'green', marking_alt: 'red'}));

r = new Rule ({stator: 1, rule_colour: sliderules . wood, left_margin: 0.12, right_margin: 0.12}); s . rules . push (r);
r . scales . push (new scale_B (24, {colour: 'gold', left_extension: 0.08, right_extension: 0.076, alt: 'green', marking_alt: 'red'}));
r . scales . push (new scale_CI (24, {colour: 'gold', left_extension: 0.08, right_extension: 0.078, marking_colour: 'red', alt: 'green', marking_alt: 'red'}));
r . scales . push (new scale_C (24, {colour: 'gold', left_extension: 0.078, right_extension: 0.08, alt: 'green', marking_alt: 'red', draw_q: true, draw_r: true, draw_st_corrections: true}));

r = new Rule ({rule_colour: sliderules . wood, left_margin: 0.12, right_margin: 0.12}); s . rules . push (r);
r . markings . push (new Logo (sliderules . house_logo, 1.1, 46, 0.32));
r . markings . push (new Logo (sliderules . house_logo, -0.1, 46, 0.32));
r . scales . push (new scale_D (24, {colour: 'gold', left_extension: 0.078, right_extension: 0.08, alt: 'green', marking_alt: 'red'}));
r . scales . push (new scale_SCdec_down (24, {colour: 'gold', left_extension: 0.08}));
r . scales . push (new scale_TCTdec_down (24, {colour: 'gold', left_extension: 0.08}));
//r . scales . push (new scale_ST (24, {colour: 'gold'}));

s . rules . push (new spacer (2));

r = new Rule ({rule_colour: sliderules . wood, v_scaling: 0.5, left_margin: 0.12, right_margin: 0.12}); s . rules . push (r);
r . scales . push (new spacer (12));
r . scales . push (new scale_StudyMate (24, {colour: 'gold', shift: -1, right_extension: 0.1}));