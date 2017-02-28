Snap.sin = Snap.sin || function (x) {
  return Math.sin(Snap.rad(x));
};
Snap.cos = Snap.cos || function (x) {
  return Math.cos(Snap.rad(x));
};

var s = Snap(),
                stroke = 10,
                gap = 10,
                alpha = 0;

            function getPattern(stroke, gap, angle) {
                angle = (angle + 360) % 360;
                if (+angle.toFixed(1) == 0 || +angle.toFixed(1) == 180) {
                    return s.rect(0, 0, 2, stroke).toPattern(0, 0, 2, stroke + gap);
                }
                if (+angle.toFixed(1) == 90 || +angle.toFixed(1) == 270) {
                    return s.rect(0, 0, stroke, 2).toPattern(0, 0, stroke + gap, 2);
                }
                var sin = Snap.sin(angle),
                    cos = Snap.cos(angle),
                    gs = gap / sin,
                    ss = stroke / sin,
                    gc = gap / cos,
                    sc = stroke / cos;
                return s.path("M" + [gs.toFixed(2), 0] + "H" + (gs + ss).toFixed(2) + "L" + [0, (gc + sc).toFixed(2)] + "v" + (-sc.toFixed(2)) + "zM" + [(gs + ss).toFixed(2), gc.toFixed(2)] + "v" + sc.toFixed(2) + "h" + (-ss.toFixed(2)) + "z").toPattern(+Math.min(gs + ss, 0).toFixed(2), +Math.min(gc + sc, 0).toFixed(2), +Math.abs(gs + ss).toFixed(2), +Math.abs(gc + sc).toFixed(2));
            }


            function polka(dot, gap, type) {
                var g = s.g(),
                    gd = gap + dot,
                    r = dot / 2,
                    sin45 = Math.sin(Math.PI / 4),
                    sin60 = Math.sin(Math.PI / 3),
                    cos60 = Math.cos(Math.PI / 3);
                switch (type) {
                    case 1:
                        g.circle(r, r, r);
                        return g.toPattern(0, 0, gd, gd);
                    break;
                    case 2:
                        g.circle(r, r, r);
                        g.circle(r + gd * sin45, r + gd * sin45, r);
                        if (gd * 2 * sin45 < r + gd * sin45 + r) {
                            g.circle(r - gd * sin45, r + gd * sin45, r);
                            g.circle(r + gd * sin45, r - gd * sin45, r);
                            g.circle(r - gd * sin45, r - gd * sin45, r);
                        }
                        return g.toPattern(0, 0, +(gd * 2 * sin45).toFixed(2), +(gd * 2 * sin45).toFixed(2));
                    break;
                    case 3:
                        g.circle(r, r, r);
                        g.circle(r + gd * sin60, r + gd * cos60, r);
                        if (gd * 2 * cos60 < r + gd * cos60 + r) {
                            g.circle(r + gd * sin60, r - gd * cos60, r);
                        }
                        if (gd * 2 * sin60 < r + gd * sin60 + r) {
                            g.circle(r - gd * sin60, r + gd * cos60, r);
                            g.circle(r - gd * sin60, r - gd * cos60, r);
                        }
                        return g.toPattern(0, 0, +(gd * 2 * sin60).toFixed(2), +(gd * 2 * cos60).toFixed(2));
                    break;
                    case 4:
                        g.circle(r, r, r);
                        g.circle(r + gd * cos60, r + gd * sin60, r);
                        if (gd * 2 * cos60 < r + gd * cos60 + r) {
                            g.circle(r - gd * cos60, r + gd * sin60, r);
                        }
                        if (gd * 2 * sin60 < r + gd * sin60 + r) {
                            g.circle(r + gd * cos60, r - gd * sin60, r);
                            g.circle(r - gd * cos60, r - gd * sin60, r);
                        }
                        return g.toPattern(0, 0, +(gd * 2 * cos60).toFixed(2), +(gd * 2 * sin60).toFixed(2));
                    break;
                }
            }




            var dots = s.g();
            // debugger;
            // var  p1, p2, p3, p4,
            // dots1 = dots.circle(650, 150, 200).attr({
            //   fill: p1 = polka(stroke, 20, 2)
            // });
            // $('svg').appendTo('.dot-holder')
            // $('.dots-holder').append(dots1)
// console.log(dots)
// console.log(dots1)
