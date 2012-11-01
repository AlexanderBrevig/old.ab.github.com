---
layout: post
title: "The Military Pattern"
tagline: "One Method To Rule Them All"
description: ""
category: technology
tags: [article, patterns]
---
{% include JB/setup %}
##The problem
When designing Object Oriented Systems I often come across some objects that share a trait that I would like to utilize atomically. That is, seemingly atomically from the client code point of view.

Say we have an application that has a lot of widgets. These widgets are all <code>Hideable</code>, and at various points in your application you need all widgets and everything else that is <code>Hideable</code> to simply <code>Hide</code>. Before I usually ended up writing code similar to this:

    foreach (Hideable hideable in frame.GetWidgetsManager().GetAllWidgets()) {
        hideable.Hide();
    }
    foreach (Hideable hideable in frame.GetPopupNotices()) {
        hideable.Hide();
    }

Wouldn’t it be great if we could simply do: <code>Hideable.Hide();</code> ?

##The soludion
I have a solution this problem that I often utilize. I like to call it the Military Pattern. Why? It’s because in the military, each soldier listens to the command given by the commanding officer. Imagine if he had to walk up to every soldier at every location on the battlefield. Now, lets leave the analogy and have a look at the pattern:

* Create a public static method that is preferably named as a verb, such as <code>Fire()</code>. I will refer to this method as the Command Method.
* Define an abstract method, preferably prefixed On, such as <code>OnFire()</code>. This method I will refer to as the Action Method.
* Make a static private list of instances that you maintain using the constructor and implement the <code>IDisposable</code> interface for explicitly removing an item. Then, in the command method; loop through all instances and call the action method on each of them. You could even consider using <code>Parallel.For</code> if you’re careful about your object and their independence of shared state.

##The (simplistic) case study 
    
    class MilitaryPatternDemonstration {

        public abstract class Fireable : IDisposable {
            public static void Fire() { 
                foreach (var fireable in instanceList) { 
                    fireable.OnFire(); 
                } 
            }
            
            public void Dispose() { instanceList.Remove(this); } 
            
            protected abstract void OnFire(); 
            
            protected Fireable() { instanceList.Add(this); }
            
            private static List<Fireable> instanceList = new List<Fireable>();
        }
     
        public class Gunner : Fireable { 
            public Gunner(string name) { Name = name; }

            protected override void OnFire() { Console.WriteLine("\t->Gunner "+Name+" firing..."); }

            public string Name { get; set; }
        }
     
        public class Archer : Fireable { 
            public Archer(string name) { Name = name; }

            public string Name { get; set; }

            protected override void OnFire() { Console.WriteLine("\t->Archer "+Name+" firing..."); }
        }


        static void Main(string[] args) {
            Gunner g1 = new Gunner("Rambo"), 
                   g2 = new Gunner("James");
            Gunner g3 = new Gunner("Lara"),
                   g4 = new Gunner("Robocop");
            Archer a1 = new Archer("Robin");

            Console.WriteLine("Fire all active fireables #1: "); 
            
            Fireable.Fire();

            g4.Dispose(); //explicitly kill a gunner, so that it is removed from the instanceList
            
            Console.WriteLine("Fire all active fireables #2, after g4.Dispose(): "); 
            
            Fireable.Fire();

            Console.ReadKey(); //halt so we can see the output
        }
    }

Produces the following output:

    Fire all active fireables #1:
            ->Gunner Rambo firing...
            ->Gunner James firing...
            ->Gunner Lara firing...
            ->Gunner Robocop firing...
            ->Archer Robin firing...
    Fire all active fireables #2, after g4.Dispose():
            ->Gunner Rambo firing...
            ->Gunner James firing...
            ->Gunner Lara firing...
            ->Archer Robin firing...

As you see, the first call to <code>Fireable.Fire();</code> made a call to <code>OnFire</code> on all the <code>Gunners</code> and the <code>Archer</code> in one pseudo-atomic line of code. The second call to <code>Fireable.Fire();</code> does not call <code>OnFire</code> on Robocop, because he has been disposed at that time. (I know, it is actually possible to dispose of Robocop! Who would have though?)

##One caveat and a point of improvement
If you decide to use this pattern, you should be aware that when you new up an object, that object automatically gets added to the internal list, that is – it will not be destroyed when its scope ends because something is referring to it. You will need to manually maintain objects if they use this pattern in C#.

I have found myself requiring some conditions for which objects to actually call, one way is to set flags on each object and actively check against them in the Action Method, but I like to pass a lambda predicate to the Command Method and have it check if the predicate is true, before calling the Action Method.

    Fireable.Fire(f=>f.HasAmmo && f.AtFrontLine()); //only fire those who satisfy this predicate

Declare war on ‘repeat yourself’ <code>for</code> constructs and employ the Military Pattern to stay DRY.
