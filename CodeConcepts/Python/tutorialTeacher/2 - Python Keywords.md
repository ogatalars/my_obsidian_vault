Just like natural languages, a computer programming language comprises of a set of predefined words which are called keywords. A prescribed rule of usage for each keyword is called a syntax.

Python 3.x has 33 keywords. Since they have a predefined meaning attached, they cannot be used for any other purpose. The list of Python keywords can be obtained using the following help command in Python shell.

The following table list all the keywords in Python.

Except for the first three (False, None and True), the other keywords are entirely in lowercase.

Use `help()` command to know more about each individual keyword. The following will display information on the`global` keyword.

## Reserved Identifiers

Python built-in classes contains some identifiers that have special meanings. These special identifiers are recognized by the patterns of leading and trailing underscore characters:

<table><tbody><tr><td>Pattern</td><td>Description</td><td>Examples</td></tr><tr><td>_*</td><td>_ stores the result of the last evaluation.</td><td><pre><code><span>&gt;&gt;</span><span>&gt;</span> <span>5</span> <span>*</span> <span>5</span> 
<span>25</span>
<span>&gt;&gt;</span><span>&gt;</span> _
<span>25</span>
</code></pre></td></tr><tr><td>__*__</td><td>It represents system-defined identifiers that matches __*__ pattern, also known as <b>dunder names</b>. These can be functions or properties such as <code>__new__()</code>, <code>__init__()</code>, <code>__name__</code>, <code>__main__</code>, etc.</td><td><pre><code> <span>&gt;&gt;</span><span>&gt;</span> __name__
<span>'__main__'</span></code></pre></td></tr><tr><td>__*</td><td>It represents class's private name pattern. These names are to be used with private member names of the class to avoid name clashes between private attributes of base and derived classes.</td><td></td></tr></tbody></table>