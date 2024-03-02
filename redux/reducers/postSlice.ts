import {createSlice}  from "@reduxjs/toolkit";

type initialStateType = {
    posts:[
        {
            id: number,
            caption: string | null
            location: string | null,
            tags: string[] | null,
            likes: number,
            totalComments: number,
            comments: [
                {
                    id: number,
                    comment: string,
                    likes: number,
                    user: {
                        id: number,
                        username: string,
                        profilePicture: string | null,
                    },
                    replies: [],
                },
            ],
        },
    ],
    user:{
        username: string,
        totalFollowers: number,
        totalFollowing: number,
        followers: [],
        following: [],
        profilePicture: string | null,
        bio: string | null,
        website: string | null,
        posts:[],
        totalPosts: number,
    },
};

const initialState = {
    posts: [
        {
            id: 1,
            caption: "This is a test caption",
            location: "Test location",
            tags: ["test", "caption", "location"],
            likes: 0,
            totalComments: 0,
            comments: [
                {
                    id: 1,
                    comment: "This is a test comment",
                    likes: 0,
                    user: {
                        id: 1,
                        username: "testuser",
                        profilePicture: "https://www.google.com",
                    },
                    replies: [
                        {
                            id: 1,
                            comment: "This is a test reply",
                            likes: 0,
                            user: {
                                id: 1,
                                username: "testuser",
                                profilePicture: "https://www.google.com",
                            },
                            replies: [],
                        },
                    ],
                },
            ],
        },
    ],
    user:{
        username: "testuser",
        totalFollowers: 0,
        totalFollowing: 0,
        followers: [],
        following: [],
        profilePicture: "https://www.google.com",
        bio: "This is a test bio",
        website: "https://www.google.com",
        story: [
            {
                id: 1,
                image: "https://www.google.com",
            },
        ],
    },
}

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers:{
        addPost: (state, action) =>{

            state.posts = [...state.posts, action.payload]
        }
    },
});