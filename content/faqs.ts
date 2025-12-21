// content/faqs.ts
import type { Service } from "./services";
import type { State } from "./states";

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildFaq(service: Service, state: State): FaqItem[] {
  return [
    {
      question: `How much does ${service.name.toLowerCase()} cost in ${state.name}?`,
      answer: `${service.name} costs in ${state.name} typically range based on ${service.drivers[0].toLowerCase()} and other factors. Our estimates adjust national baseline pricing using BEA Regional Price Parities and BLS Consumer Price Index data.`,
    },
    {
      question: "Is this a quote or an estimate?",
      answer: "This is an estimate, not a quote. Actual prices vary by job size, access, materials, timing, and contractor. We recommend getting multiple local quotes before booking.",
    },
    {
      question: "How often is pricing updated?",
      answer: "We update our estimates monthly using the latest BLS CPI data and annually when BEA releases new Regional Price Parity data.",
    },
    {
      question: `What's included in ${service.name.toLowerCase()}?`,
      answer: `Typically included: ${service.included.join(", ")}. Not included: ${service.notIncluded.join(", ")}.`,
    },
  ];
}
