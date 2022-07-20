const initialState = {
  posts: [
    {
      id: '1',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-01-01',
      author: 'John Doe',
      category: 'Movies'
    },
    {
      id: '2',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-03-02',
      author: 'Anna Doe',
      category: 'Movies'
    },
    {
      id: '3',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-05-03',
      author: 'Patrick Doe',
      category: 'News'
    },
    {
      id: '4',
      title: 'Article title',
      shortDescription: 'Short description of the article...',
      content: 'Main content of the article',
      publishedDate: '2022-06-23',
      author: 'Jack Doe',
      category: 'Sport'
    },
  ],
  categories: ['Movies', 'Sport', 'News'
  ],
};

export default initialState;