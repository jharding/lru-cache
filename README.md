[![build status](https://secure.travis-ci.org/jharding/lru-cache.png?branch=master)](http://travis-ci.org/jharding/lru-cache)

LRU Cache
=========
 
LRU Cache is a dead simple implementation of, you guessed it, an LRU cache. If
you're looking for a LRU cache with plenty of features, this is not the library
you're looking for /end jedi mind trick.

Download
--------

* [lru_cache.js v0.1.0][lru_cache.js]

Usage
-----

### API

#### LruCache(maxSize)

The constructor function. `maxSize` is the number of entries the cache will hold
before it starts evicting. `maxSize` defaults to `100`.

#### LruCache#set(key, entry)

Store an entry in the cache. `key` is expected to be a string and `entry` can be
anything, note however it'll be stored by reference.

#### LruCache#get(key)

Retrieves a stored entry from the cache. If the entry doesn't exist, `undefined`
will be returned.

Example
-------

```js
var cache = new LruCache(3);

cache.set('one', 1);
cache.set('two', 2);
cache.set('three', 3);
cache.get('one');
cache.set('four', 4);

cache.get('one') === 1;
cache.get('two') === undefined;
cache.get('three') === 3;
cache.get('four') === 4;
```

Testing
-------

Tests are written using [Jasmine][jasmine] and ran with [Karma][karma]. 
To run LRU Cache's test suite with PhantomJS, run `npm test`.

Issues
------

Found a bug? Create an issue on GitHub.

https://github.com/jharding/lru-cache/issues

Versioning
----------

For transparency and insight into the release cycle, releases will be numbered with the follow format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backwards compatibility bumps the major
* New additions without breaking backwards compatibility bumps the minor
* Bug fixes and misc changes bump the patch

For more information on semantic versioning, please visit http://semver.org/.

License
-------

Copyright (c) 2013 [Jake Harding](http://thejakeharding.com)  
Licensed under the MIT License.

[lru_cache.js]: https://raw.github.com/jharding/lru-cache/master/lru_cache.js 
[jasmine]: https://jasmine.github.io/
[karma]: http://karma-runner.github.io
