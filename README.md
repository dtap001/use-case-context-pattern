# Use Case Context Pattern

## Why?

## How?

## Building blocks

### Context

- invokes backend services
- gets entity from the state
- invokes the functions of the retrieved entity
- stores the entity back to the state
- converts entity to view model
- converts dto to fields to be understandable to the entity

### State

- responsible of storing and retrieving the current entity graph
- uses behaviour subject for this
- every maniuplation must be implemented through function invocation

### Entity

- encapsulates all domain logic

### ViewModel

- must be a readonly opt type
- only an interface -> act as a DTO
- never implement any method on it
- stores data for the angular component

### Backend

- detaches the backend operations from the app itslef
- it must implement a common interface which helps us to create mock implementation without any real http calls
- returns the dto of the backend communication
