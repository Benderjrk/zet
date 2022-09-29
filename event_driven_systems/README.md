# The Different Types of Events in Event-Driven Systems

## Thursday, September 29, 2022, 1:07:26PM EDT

Event-driven systems come in all sorts of shapes and sizes. The obvious
commonality is; they all use events to communicate information. These
events come in many shapes and sizes, and determining what does into an
event has an immense impact on the design of your system.

In this we will go over three different types of events. I hope
clarifying these types will allow you to have better discussions about
event-driven architectures and integrations.

## Three Event Archetypes

Each type has its own unique characteristics, strengths, and weaknesses.
None of these types of events is necessarily better than the other, but
given a situation, a particular type may be the better fit.

* The Domain Event
* The Trigger or Signal Event
* The RESTful or "Fat" Event

Let's go over each of them to see what they are, and when they are
useful.

## The Domain Event

For anybody who has an interest in Domain-Driven Design, this well be
the most familiar type of event. A domain event is a record of history,
capturing the intent and any relevant context about an important moment
in time. Domain events focus on the "domain", which means they focus on
things that are relevant to the business. Because they record history
they are expressed in the past tense.

Domain event are named in a way that the intent is clearly expressed. It
is advised to use human language to name these events, try to avoid
"beep boop" language. Instead of naming the event `OrderStateChanged` or
`OrderEvent`, use something like `OrderWasShipped`.

Unlike the other event types, domains events are great for capturing
intent. Because domains events only capture the relevant context of an
important moment, they are also great for capturing change. This gives
event consumers great insights into what is going on. Event-sourced
systems take this a step further, making domain events the corner-stone
of the software model.

Domain events are particularly well suited to use in the creation of
read models. In situations where the read-case requirements are very
different from the data model useful to make decisions. The change and
intent centric representation is great for aggregation, both in the
creation of read models and in analytical data models.


