Components:

    context

    entity

    viewmodel(s)

    state

    backend(s)

<img width="924" height="828" alt="image" src="https://github.com/user-attachments/assets/8bc51885-20a5-4cc7-84f7-8d28ab0cef04" />
Context
Responsibilities

    main interaction point between the angular component and the business logic

    calls other contexts

    calls backends

    calls state with actions

    all the state getters should be grouped in the first part of the context file

Hard rules

    context can only have interfaces in the constructor
    context cannot have any parent class
    context cannot return entity, only VM = ViewModel

Entity
Responsibilities

    contains the business logic for mutating the current state 

    exposes interface for the possible actions which result the mutation

Hard rules

    entity internal state cannot modified from the outside
    entity stores the data as VM instances

ViewModel
Responsibilities

    contains view related informations

Hard rules

    everything coming out from this layer must be wrapped in Readonly<> ts utility type

State
Responsibilities

    storing new values

    proxying actions toward the entity to mutate the state

    distributing new values

Hard rules

    everything coming out from this layer must be wrapped in Readonly<> ts utility type

Backend

Responsibilities

    communication point between different system components

    convert the response to the expected format which is a DTO that in that context

Hard rules

    it must use the base class for the actual communication

