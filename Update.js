// update method
db.movies.updateOne({ filter }, { $set: { updateData }, $currentDate: { lastUpdated: true } })


db.movies.updateOne({ title: "Tag" },
    {
        $set: {
            plot: "Tag is a comedy about a group of friends who continue their childhood game of tag into adulthood, going to great lengths to tag one elusive member before his wedding."
        },
        $currentDate: { lastUpdated: true }
    });

db.movies.updateMany({ rated: "PG-13" },
    {
        $set: {
            Meaning: "A PG-13 movie is suitable for viewers aged 13 and older, with some content that may be inappropriate for younger children."
        },
        $currentDate: { lastUpdated: true }
    })
