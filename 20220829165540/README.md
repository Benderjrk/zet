# Api Designs

---

## API Paradigms

* Query APIs
* Streaming APIs
* Web APIs
* Flat File
* RPC APIs

Customer specific APIs (2000) -> Generic APIs -> Autonomous APIs (many to many)

The fourtune 500 world still runs on SOAP, EDI or FTP, not REST or GraphQL

REST isn't the main paradigm

## Constraints

* Business Constraints - customer-related, business requirements, product requirements
* Complexity Constraints - implications of distributed systems complexity, evolution qualities
* Domain Constraints - domain-specific limitations, regulations, environments
* Visibility
  * monitoring
  * security
  * caching

* Portability
  * different environments

* Cultural Constraints - Conway's law, knowledge, (human) resources, peer-pressure, trendiness

## Distributed System Properties

* Performance
  * network performance
  * network efficiency
  * user-perceived

* Scalability
  * size complexity

* Simplicity
  * of the uniform interface
  * user-perceived
  * task-structure
  * unpredictability
  * algorithmic
  * chaotic

* Modifiability
  * evolvability
  * extensibility
  * customizability
  * configurability
  * reusability

* Visibility
  * monitoring
  * security
  * caching

* Portability
  * different environments
  * code with data

* Reliability
  * susceptibility to failure
  * ability to recover

* Discoverability
  * design-time
  * runtime-time

* Type-safety

* Ease of Development
  * server
  * client

* Costs effectivity
  * time to market
  * development costs
  * maintenance costs
  * cost of change

## Distributed Ecosystem 

* Active Community

* Tooling
  * client
  * server
  * API management
  * Development experience

* Ecosystem Maturity

* Resources
  * books
  * articles
  * on-boarding tutorials

* Enterprise Readiness

These are a lot of properties that some people may care about. These properties are too broad to be needed by every API.
Your constraints will imply another set of properties

## REST

* Hard to get started with
* Difficult to master
* Rare to find
  - Successful implementations are rare outside WWW
* Unparallelled scalability, evolvability and discoverability if pulled properly

### REST Constraints and induced properties

1. Client-Server
2. Stateless
3. Cacheable
4. Layered System
5. Code on Demand (optional)
6. Uniform Interface
  1. Identification of resources
  2. Resource representations
  3. Self-descriptive Messages
  4. HATEOAS

Over to:

1. Performance
2. Scalability
3. Simplicity
4. Modifiability
5. Visibility
6. Portability
7. Reliability


## REST Provides Benefits

* Will scale indefinitely
* High performance (especially over HTTP2)
* Proven for decades
* Works with any representation and media type
* Affordance-centric (design maturity)
* Server-driven application state (server tells you what yhou can call and when)
* Full decoupling of client and server enabling the independent evolution
* Links across APIs

## ...But comes with a cost

* Huge entry barrier in training and learning, which most of us never overcome
* The big change in the paradigm shift from SOAP, challenging for enterprises to change the mindset
* Requires clients to play along, requires discipline on all sides
* Poor or no tooling for clients
* Limiting API description formats
* Challenging to keep consistency and any governance

## So-called REST

* Most common type of generic APIs by far
* Usually follows HTTP-induced constraints
* But many instances does not even follow HTTP protocol (concern separation, Amundsen & Richardson maturity models)
* Requires significant amount of understanding of HTTP protocol on both client and server side.
* Independent evolution is impossible or, at least, painful
* Benefits from internet infrastructure-scaleability


The more specific a design idea is, the greater its appeal is likely to be

## GraphQL

* Easy to get started with
* Remote data access, essentially simplified, vendor-agnostic SQL
* Unparallelled tooling and on-boarding, DX and time-to-market
* Ignoring the whole internet infrastructure with POST tunnelling
* Bike shedding (authentication, content negotiation, pagination, and other rate limitign had to be reinvented)
* Scaleability issues (thanks to no infrastructure caching)
* Tight coupling of clients with servers (data structure)

### GraphQL provides benefits

* Easy to start with
* Time to market for servers and clients
* Amazing developer experience
* Contract-driven by nature
* Built-in introspection
* Easier to keep consistnent and to govern
* Closer to WS/SQL data access make the paradigm shift easier than with REST
* Design can be deferred to later (which might be also a bad thing)

## ...but graphql comes with costs

* Neglects the problems of the distributed systems
* Server and clients coupled at the client programming time, application state is not driven but the server
* Query optimization
* Bikeshedding (content negotiation, network errors, caching, authentication)
* Scaling (server and client caching only. You can't rely on exisiting caches)
* Throws away everything HTTP was figuring out for the last 17 years
* Limited media type support
* Too frew vendors in the ecosystem, the major one is pretending to own the show.


## Nobody and escape the API design

The REST you have to go through the exercise of understanding the users' needs before the API implementations

With GraphQL you can defer the moment of understanding how users consume your API until you start profiling the queries, evaluation their complexity and identifying the slow queries.

GraphQL gives you seemingly generic API (remote data access)

Good REST API is designed with use-cases in mind (affordance-centric design)

Either way you have to understand the user needs and design your API and its implementations accordingly.

It would be foolish to think you can create a well-perfomant API for every use case. You have to make design choices.

## Use REST if

* Build system that lasts
* In need of content negotiation (language)
* Precise authentication, autorization rate limiting
* Interlink resources between APIs
* Use mixed media types
* Care about scaleability

## Use GraphQL if

* Talking to yourself (frontend-backend)
* Instead of so-called-REST
* Short term projects
* Uncertain use-cases
* Just access data without the need for infra caching
* Amazing DX with little effort

DO NOT BUILD SO-CALLED-REST

Always pick based on *your constraints*, not somebody else's. You are *unique*.

