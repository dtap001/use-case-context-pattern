# Use Case Context Pattern
A battle tested, easy way to handle frontend states in modern angular webapplications.

## Components

- **context**
- **entity**
- **viewmodel(s)**
- **state**
- **backend(s)**

![Architecture Diagram](https://github.com/user-attachments/assets/8bc51885-20a5-4cc7-84f7-8d28ab0cef04)

---

## Context

### Responsibilities
- Main interaction point between the Angular component and the business logic  
- Calls other contexts  
- Calls backends  
- Calls state with actions  
- All the state getters should be grouped in the first part of the context file  

### Hard Rules
- Context can only have interfaces in the constructor  
- Context cannot have any parent class  
- Context cannot return entity, only **VM = ViewModel**

---

## Entity

### Responsibilities
- Contains the business logic for mutating the current state  
- Exposes interface for the possible actions which result in the mutation  

### Hard Rules
- Entity internal state cannot be modified from the outside  
- Entity stores the data as **VM instances**

---

## ViewModel

### Responsibilities
- Contains view-related information  

### Hard Rules
- Everything coming out from this layer must be wrapped in `Readonly<>` TypeScript utility type  

---

## State

### Responsibilities
- Storing new values  
- Proxying actions toward the entity to mutate the state  
- Distributing new values  

### Hard Rules
- Everything coming out from this layer must be wrapped in `Readonly<>` TypeScript utility type  

---

## Backend

### Responsibilities
- Communication point between different system components  
- Convert the response to the expected format, which is a DTO in that context  

### Hard Rules
- It must use the base class for the actual communication  
