export interface About {
    id?: string;
    content: string;
    ContentHeadTagLine?: string;
    profilePhoto?: string;
    socialLinks: {
        github?: string;
        linkedin?: string;
        twitter?: string
    };
    createdAt: string;
    updatedAt?: string;
}