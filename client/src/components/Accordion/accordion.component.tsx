"use client";

import AccordionProps from "./accordion.interface";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import styles from "./accordion.module.css";

function AccordionComponent(props: AccordionProps) {
  const { title, children } = props;
  return (
    <Accordion.Root className={styles.AccordionRoot} type='single' collapsible>
      <Accordion.Item className={styles.AccordionItem} value={title}>
        <Accordion.Header className={styles.AccordionHeader}>
          <Accordion.Trigger className={styles.AccordionTrigger}>
            <span className={styles.AccordionTitle}>{title}</span>
            <ChevronDownIcon className={styles.AccordionChevron} aria-hidden />
          </Accordion.Trigger>
        </Accordion.Header>
        <Accordion.Content className={styles.AccordionContent}>
          <div className={styles.AccordionChildren}>{children}</div>
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  );
}

export default AccordionComponent;
