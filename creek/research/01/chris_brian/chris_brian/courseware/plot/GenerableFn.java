/* *  * @(#)GenerableFn.java 0.2 980922 * * Copyright (c) 1998 Ginger Booth.  All Rights Reserved. *  * @history: original * @author Ginger Booth * @version 0.2, September 1998 */package courseware.plot;/** Any plottable function which is not conveniently reduced to calling f(x) *  over the x-axis, and therefore is simply given the plot limits and asked to *  return a double[2][npts] of its points. Examples: *	  a vertical line (X=a) *    sidelying parabola (range over vertical rather than horiz axis) *    circle *  One would select a GenerableFn over simply adding points to a Plot if one *  wants the points to be recalculated when the plot is zoomed. I.e., if  *  generating the points lists is relatively cheap. */public interface GenerableFn extends PlottableFn {    public String getName();    /** NOTE: we only SUGGEST the npts. This routine is permitted to decide     *  for itself how many points it wants to generate.     */    public double[][] getPoints(int suggestedNpts, double x0, double y0,		                            double x1, double y1);}