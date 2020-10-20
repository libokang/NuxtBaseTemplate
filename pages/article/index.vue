<template>
    <div class="article-page">
        <div class="banner">
            <div class="container">
                <h1>{{ article.title }}</h1>

                <article-meta :article="article" />
            </div>
        </div>

        <div class="container page">
            <div class="row article-content">
                <div class="col-md-12" v-html="article.body"></div>
            </div>

            <hr />

            <div class="article-actions">
                <article-meta :article="article" />
            </div>

            <div class="row">
                <div class="col-xs-12 col-md-8 offset-md-2">
                    <artcile-comments :article="article" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ArticleMeta from "./components/article-meta";
import ArtcileComments from "./components/article-coments";
import { getArticle } from "@/api/article";
import MarkdownIt from "markdown-it";
export default {
    name: "ArticleIndex",
    components: {
        ArticleMeta,
        ArtcileComments
    },
    head() {
        return {
            title: `${this.article.title} - RealWrold`,
            meta: [{ hid: "description", name: "description", content: this.article.description }]
        };
    },
    async asyncData({ params }) {
        const { data } = await getArticle(params.slug);
        const md = new MarkdownIt();
        const { article } = data;
        article.body = md.render(article.body);
        return {
            article
        };
    }
};
</script>
