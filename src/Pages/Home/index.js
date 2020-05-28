import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import api from "../../config/api";
import {
  Container,
  Post,
  Title,
  SubTitle,
  Snopses,
  Highlight,
  BookImage,
  PostContent,
  Content,
  Loading,
} from "./styles";

import Header from "../../components/Header";

export default function Home() {
  const [feed, setFeed] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  async function loadPage(pageNumber = page, shouldRefresh = false) {
    if (total && pageNumber > total) return;

    setLoading(true);

    const response = await api.get("/book/list");

    const data = response.data.data;

    const totalItems = response.data.cont;

    setTotal(Math.floor(totalItems / 5));
    setFeed(shouldRefresh ? data : [...feed, ...data]);
    setPage(page + 1);
    setLoading(false);
  }

  useEffect(() => {
    loadPage();
  }, []);

  async function refreshList() {
    setRefreshing(true);
    await loadPage(1, true);
    setRefreshing(false);
  }

  return (
    <Container>
      <FlatList
        style={{ flex: 1 }}
        data={feed}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <>
            <Header />
            <Highlight style={{ width: "100%", height: 100 }}>
              <BookImage source={{ uri: "https://picsum.photos/150/300" }} />
            </Highlight>
          </>
        }
        keyExtractor={(post) => String(Math.random())}
        renderItem={({ item }) => (
          <Post>
            <PostContent>
              <BookImage source={{ uri: item.book_url }} />
              <Content>
                <Title>{item.title}</Title>
                <SubTitle>{item.subtitle}</SubTitle>
              </Content>
            </PostContent>
          </Post>
        )}
      />
    </Container>
  );
}
