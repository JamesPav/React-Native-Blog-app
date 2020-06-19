import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditScreen = ({ navigation }) => {
  const route = useRoute();
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blogPost) => blogPost.id === id);

  return (
    <BlogPostForm
      initialValues={{ title: blogPost.title, content: blogPost.content }}
      onSubmit={(title, content) =>
        editBlogPost(id, title, content, () => navigation.pop())
      }
    />
  );
};

const styles = StyleSheet.create({
  form: {
    margin: 10,
  },
  input: {
    fontSize: 18,
    borderWidth: 1,
    marginBottom: 15,
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

export default EditScreen;
