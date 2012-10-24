---
layout: post
title: "PicoFSM, the smallest .NET FSM framework"
tagline: "Lambdas for enter, update and exit"
description: ""
category: projects
tags: [projects, csharp, fsm, nuget]
---
{% include JB/setup %}

#PicoFSM

Visit [PicoFSM](https://github.com/AlexanderBrevig/PicoFSM) on [GitHub](http://github.com")

Extremely lightweight FSM library, supports edge definitions in the form of TransitionToWhen(state,condition)

Install from Package Manager Console:

    PM> Install-Package picoFSM


##Example

    Machine machine = new Machine();
    
    var second = new State(
        "second",
        (s) =&gt; { Console.WriteLine("first.Update until TransitionTo"); return false; }
    );
    
    var first = new State(
        "first",
        (s) =&gt; { Console.WriteLine("first.Enter"); return true; },
        (s) =&gt; { Console.WriteLine("first.Update"); return true; },
        (s) =&gt; { Console.WriteLine("first.Exit"); machine.TransitionTo(second);  return true; }
    );
    
    bool trueOnce = true;
    /// This is a rule that forces first to be selected as the first state
    /// We could do machine.TransitionTo as part of this setup, 
    /// but this demonstrates the use of TransitionToWhen
    machine.TransitionToWhen(first, (s) =&gt; {
        bool tmp = trueOnce;
        trueOnce = false;
        return tmp;
    });
    
    machine.Update();
    machine.Update();
    machine.Update();
    machine.Update();
    machine.Update();
    Console.WriteLine("...");

Prints:
    
    first.Enter
    first.Update
    first.Exit
    first.Update until TransitionTo
    first.Update until TransitionTo
    first.Update until TransitionTo
    ...


Refer to another example here: [PicoFSMSample/Program.cs](https://github.com/AlexanderBrevig/PicoFSM/blob/master/PicoFSMSample/Program.cs)