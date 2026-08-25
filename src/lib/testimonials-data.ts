export type Testimonial = {
  author: string;
  quote: string;
  source: string;
};

// Real Google reviews for ENJ Renovations Ltd. Owner replies are
// intentionally left out — just the customer's own words.
export const TESTIMONIALS: Testimonial[] = [
  {
    author: "Sardonix Gel",
    quote:
      "We had our kitchen remodeled by ENJ Renovations Ltd., and the experience was excellent from start to finish. Sam was professional, friendly, and paid great attention to detail. Our old kitchen was transformed into a beautiful, modern space that exceeded our expectations. The quality of the work was outstanding, communication was great throughout the project, and everything was completed on time. We couldn't be happier with the results and would highly recommend ENJ Renovations Ltd. to anyone looking for quality renovations in Edmonton. Thanks again, Sam!",
    source: "Google Review",
  },
  {
    author: "Nathan Jurju",
    quote:
      "Sam from ENJ Renovations did a section of our basement and we couldn't be happier with how it turned out. He was easy to work with, showed up when he said he would, and the quality of the work was excellent. You can tell he takes pride in what he does. I'd definitely recommend ENJ Renovations to anyone looking for honest, quality renovation work.",
    source: "Google Review",
  },
  // Niko Welsh's bathroom-renovation review is coming — Google truncated it
  // with "... More" when it was copied over, so it's left out until we have
  // the full, un-truncated text rather than guessing at how it ends.
];
