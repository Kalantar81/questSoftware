

## Development server

This is angular application with angular material UI library.
I used my universal model with different view options, like: header-body, header-body-footer...
There are a lot of ways of implementing this task.
For exapmle, make all work in one component, without services, or make one parent component (workers), that have a child component(flights-for-worker), that have a child with flight info(flight-info). By input and output events realize an application.

I prefer to use an independent components, that got data from services.
With rsJs library I can use an Observables pattern and save data in BehaviorSubjects. This helps to update data without using two way data binding, and my app will works faster.
One of the most important things, for using this strategy, is not forget to do unsubscribe for Observable objects. I ussialy do this in OnDestroy() method.
In services, I prefer to save a pure data and, if I need to add some extra fields(like 'selected'), do it in specific component.
All variables and methods, that I use in HTML, will be public and, for inner component using, private.
You can, also see a custom pipe, for converting a duration data. The folder with pipes, will be in component module.