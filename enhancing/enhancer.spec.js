const enhancer = require('./enhancer.js');
// test away!

it('repair', () => {
    expect(enhancer.repair({
        name: "Link",
        enhancement: 10,
        durability: 29
    })).toEqual({
        name: "Link",
        enhancement: 10,
        durability: 100
    });
});

it('enhancement success, 15 -> 16', () => {
    expect(enhancer.succeed({
        name: "Link",
        enhancement: 15,
        durability: 0
    })).toEqual({
        name: "Link",
        enhancement: 16,
        durability: 0
    });
});

it('enhancement maxed out', () => {
    expect(enhancer.succeed({
        name: "Link",
        enhancement: 20,
        durability: 100
    })).toEqual({
        name: "Link",
        enhancement: 20,
        durability: 100
    });
});

it('enhancement fails, durability 10 -> 5', () => {
    expect(enhancer.fail({
        name: "Link",
        enhancement: 14,
        durability: 10
    })).toEqual({
        name: "Link",
        enhancement: 14,
        durability: 5
    })
});

it('enhancement fails, durability 20 -> 10', () => {
    expect(enhancer.fail({
        name: "Link",
        enhancement: 16,
        durability: 20
    })).toEqual({
        name: "Link",
        enhancement: 16,
        durability: 10
    })
});

it('enhancement fails, enhancement - 1', () => {
    expect(enhancer.fail({
        name: "Link",
        enhancement: 17,
        durability: 20
    })).toEqual({
        name: "Link",
        enhancement: 16,
        durability: 20
    })
});