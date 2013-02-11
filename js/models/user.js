Y.UserModel = Y.Base.create('userModel', Y.Model, [], {},
{
    ATTRS: {
        email: {},
        posts: {},
        re_posts: {},
        comments: {},
        username: {},
        followed_users: {},
        followers: {},
        notifications: {},
    }
});
