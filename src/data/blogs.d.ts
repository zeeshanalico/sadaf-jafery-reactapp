    declare module './blogs' {
    interface BlogPost {
        date_label: string;
        author: string;
        post_date: string;
        title: string;
        excerpt: string;
        link: string;
        thumbnail: string;
    }
    
    const blogs: BlogPost[];
    export default blogs;
}