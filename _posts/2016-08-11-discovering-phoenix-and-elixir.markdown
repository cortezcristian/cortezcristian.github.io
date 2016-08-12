---
layout: post
title:  "Discovering Elixir and Phoenix"
date:   2016-08-11 23:01:44 -0300
categories: update elixir phoenix
description: My first impressions using Phoenix and Elixir.
comments: true
---

My first impressions using Phoenix and Elixir.

# Installation

In OS X simply run:

```
$ brew install elixir
```

A few months ago a person aproached me in the colission conference to talk about Elixir, I was programming a lot with NodeJS so I thought it wasn't ready for production. Recently I've seen an amazing inspirational demo app called [phoenix-trello](https://github.com/bigardone/phoenix-trello). It's a trello tribute build on top of Phoenix (also using Webpack, React and Redux), take a look here: https://phoenix-trello.herokuapp.com

After playing a little bit with its REPL (just type `iex`), found some useful material and also a [Vim plugin](https://github.com/elixir-lang/vim-elixir).

- [Elixir Docs](http://elixir-lang.org/getting-started/introduction.html)
- [Intro to Elixir Video](https://www.youtube.com/watch?v=lly-1UYmnFI)

After that I decided it was time to install Phoenix so I follow the [official installation guide](http://www.phoenixframework.org/docs/installation)

```
$ mix local.hex
$ mix archive.install https://github.com/phoenixframework/archives/raw/master/phoenix_new.ez
```

I've heard a lot of things about this project, specially performance comparisons with NodeJS and Express.

- [Elixir and Phoenix: The Future of Web APIs and Apps?](http://blog.carbonfive.com/2016/04/19/elixir-and-phoenix-the-future-of-web-apis-and-apps/)
- [The Obligatory "Flame War" Phoenix vs Node.js](http://www.akitaonrails.com/2015/12/03/the-obligatory-flame-war-phoenix-vs-node-js)

## Creating my first project

So let's create a web project.

```
$ mix phoenix.new web
$ cd web
$ mix phoenix.server
...
[info] Running Web.Endpoint with Cowboy using http://localhost:4000
[info] GET /
```

<img src="https://www.dropbox.com/s/t9h1az5gueazocn/Screenshot%202016-08-11%2019.49.05.png?dl=1" width="600" />

What is this sorcery? After watching the video in http://www.phoenixframework.org/docs I was able to understand a little more about the structure.

Right after that some error appeared because I didn't install PostgreSQL as suggested in this guide [elixirphoenix.bash](https://gist.github.com/likethesky/abb00e5aedc38ee9f711)

```
$ mix phoenix.server
...
[info] Running Web.Endpoint with Cowboy using http://localhost:4000
[info] GET /
[debug] Processing by Web.PageController.index/2
  Parameters: %{}
  Pipelines: [:browser]
[info] Sent 200 in 1ms
[error] Postgrex.Protocol (#PID<0.2935.0>) failed to connect: ** (Postgrex.Error) tcp connect: connection refused - :econnrefused
```

So installing it:

```
$ brew install postgresql
...
To have launchd start postgresql at login:
  ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
Then to load postgresql now:
  launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist
Or, if you don't want/need launchctl, you can just run:
  postgres -D /usr/local/var/postgres

```

After that we do start the database, do a `psql` to get into it and if some error arise [just create a new database](http://stackoverflow.com/a/28690238/467034)

```
$ pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
$ psql -h localhost
psql (9.5.1)
Type "help" for help.

cristian=#\q

$ createuser -d postgres # new user will be allowed to create databases. See config/dev.exs
$ psql -d postgres
postgres=# createdb
postgres-# \l
$ mix ecto.create
$ mix phoenix.server
[info] Running Web.Endpoint with Cowboy using http://localhost:4000
12 Aug 00:02:00 - info: compiled 6 files into 2 files, copied 3 in 1.5 sec
[info] GET /
[debug] Processing by Web.PageController.index/2
  Parameters: %{}
  Pipelines: [:browser]
[info] Sent 200 in 53ms
npm install -g brunch^C
BREAK: (a)bort (c)ontinue (p)roc info (i)nfo (l)oaded
       (v)ersion (k)ill (D)b-tables (d)istribution
^C%
```

And that's it! It looks like I forgot `mix ecto.create` from the begining.

It's working as expected now! I learned about some nodejs utils like [brunch](http://brunch.io/) that are convinient if you have them installed:

```
$ npm install -g brunch
```

I'm interested on how should the Phoenix devs be called (like LAMP, MEAN... PEAP? `Phoenix Elixir AngularJS? PostgreSQL`). Let's see what we can build with this new technology in my next article. The other thing I want to explore is the sandboxing for this lang [like Exbox](https://github.com/christhekeele/exbox).
