/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getInvoice = /* GraphQL */ `
  query GetInvoice($id: ID!) {
    getInvoice(id: $id) {
      id
      amount
      currencyCode
      number
      date
      customer {
        id
        carts {
          nextToken
          startedAt
        }
        invoices {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      customerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listInvoices = /* GraphQL */ `
  query ListInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listInvoices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        amount
        currencyCode
        number
        date
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncInvoices = /* GraphQL */ `
  query SyncInvoices(
    $filter: ModelInvoiceFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncInvoices(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        amount
        currencyCode
        number
        date
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCustomer = /* GraphQL */ `
  query GetCustomer($id: ID!) {
    getCustomer(id: $id) {
      id
      carts {
        items {
          id
          dateTime
          totalPrice
          currencyCode
          customerID
          state
          productID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      invoices {
        items {
          id
          amount
          currencyCode
          number
          date
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      courses {
        items {
          id
          type
          title
          description
          completed
          startedAt
          endedAt
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseCertificateId
          courseCourseFeedbackId
          coursePublicFeedbackId
          owner
        }
        nextToken
        startedAt
      }
      conversations {
        items {
          id
          status
          askedAt
          answeredAt
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCustomers = /* GraphQL */ `
  query ListCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCustomers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        carts {
          nextToken
          startedAt
        }
        invoices {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCustomers = /* GraphQL */ `
  query SyncCustomers(
    $filter: ModelCustomerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCustomers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        carts {
          nextToken
          startedAt
        }
        invoices {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      status
      askedAt
      answeredAt
      customer {
        id
        carts {
          nextToken
          startedAt
        }
        invoices {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      customerID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        status
        askedAt
        answeredAt
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncConversations = /* GraphQL */ `
  query SyncConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncConversations(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        status
        askedAt
        answeredAt
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCart = /* GraphQL */ `
  query GetCart($id: ID!) {
    getCart(id: $id) {
      id
      dateTime
      totalPrice
      currencyCode
      customer {
        id
        carts {
          nextToken
          startedAt
        }
        invoices {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      customerID
      state
      productID
      product {
        id
        title
        description
        price
        currencyCode
        policy
        carts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCarts = /* GraphQL */ `
  query ListCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCarts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        dateTime
        totalPrice
        currencyCode
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        state
        productID
        product {
          id
          title
          description
          price
          currencyCode
          policy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCarts = /* GraphQL */ `
  query SyncCarts(
    $filter: ModelCartFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCarts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        dateTime
        totalPrice
        currencyCode
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        state
        productID
        product {
          id
          title
          description
          price
          currencyCode
          policy
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      title
      description
      price
      currencyCode
      policy
      carts {
        items {
          id
          dateTime
          totalPrice
          currencyCode
          customerID
          state
          productID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        price
        currencyCode
        policy
        carts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProducts = /* GraphQL */ `
  query SyncProducts(
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProducts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        description
        price
        currencyCode
        policy
        carts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourse = /* GraphQL */ `
  query GetCourse($id: ID!) {
    getCourse(id: $id) {
      id
      type
      title
      description
      completed
      startedAt
      endedAt
      customer {
        id
        carts {
          nextToken
          startedAt
        }
        invoices {
          nextToken
          startedAt
        }
        courses {
          nextToken
          startedAt
        }
        conversations {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      customerID
      certificate {
        id
        firstName
        lastName
        birthDate
        insuranceNr
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courseFeedback {
        id
        ranking
        comment
        courseFeedbackOverview {
          id
          totalRankings
          totalRankingStars
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courseFeedbackOverviewID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      publicFeedback {
        id
        ranking
        title
        comment
        reviewed
        publicFeedbackOverview {
          id
          totalRankings
          totalRankingStars
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        publicFeedbackOverviewID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      lessons {
        items {
          id
          unit
          title
          description
          completed
          courseID
          startedAt
          endedAt
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          lessonLessonFeedbackId
          lessonQuizId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      courseCertificateId
      courseCourseFeedbackId
      coursePublicFeedbackId
      owner
    }
  }
`;
export const listCourses = /* GraphQL */ `
  query ListCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        type
        title
        description
        completed
        startedAt
        endedAt
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        certificate {
          id
          firstName
          lastName
          birthDate
          insuranceNr
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courseFeedback {
          id
          ranking
          comment
          courseFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        publicFeedback {
          id
          ranking
          title
          comment
          reviewed
          publicFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        lessons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseCertificateId
        courseCourseFeedbackId
        coursePublicFeedbackId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourses = /* GraphQL */ `
  query SyncCourses(
    $filter: ModelCourseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        type
        title
        description
        completed
        startedAt
        endedAt
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        certificate {
          id
          firstName
          lastName
          birthDate
          insuranceNr
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courseFeedback {
          id
          ranking
          comment
          courseFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        publicFeedback {
          id
          ranking
          title
          comment
          reviewed
          publicFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        lessons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseCertificateId
        courseCourseFeedbackId
        coursePublicFeedbackId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getLesson = /* GraphQL */ `
  query GetLesson($id: ID!) {
    getLesson(id: $id) {
      id
      unit
      title
      description
      completed
      courseID
      course {
        id
        type
        title
        description
        completed
        startedAt
        endedAt
        customer {
          id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        customerID
        certificate {
          id
          firstName
          lastName
          birthDate
          insuranceNr
          startDate
          endDate
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courseFeedback {
          id
          ranking
          comment
          courseFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        publicFeedback {
          id
          ranking
          title
          comment
          reviewed
          publicFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        lessons {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        courseCertificateId
        courseCourseFeedbackId
        coursePublicFeedbackId
        owner
      }
      startedAt
      endedAt
      lessonFeedback {
        id
        ranking
        comment
        averageRanking
        questions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      Quiz {
        id
        totalCorrectQuestions
        quizQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      lessonLessonFeedbackId
      lessonQuizId
      owner
    }
  }
`;
export const listLessons = /* GraphQL */ `
  query ListLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unit
        title
        description
        completed
        courseID
        course {
          id
          type
          title
          description
          completed
          startedAt
          endedAt
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseCertificateId
          courseCourseFeedbackId
          coursePublicFeedbackId
          owner
        }
        startedAt
        endedAt
        lessonFeedback {
          id
          ranking
          comment
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Quiz {
          id
          totalCorrectQuestions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonLessonFeedbackId
        lessonQuizId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessons = /* GraphQL */ `
  query SyncLessons(
    $filter: ModelLessonFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessons(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        unit
        title
        description
        completed
        courseID
        course {
          id
          type
          title
          description
          completed
          startedAt
          endedAt
          customerID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          courseCertificateId
          courseCourseFeedbackId
          coursePublicFeedbackId
          owner
        }
        startedAt
        endedAt
        lessonFeedback {
          id
          ranking
          comment
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        Quiz {
          id
          totalCorrectQuestions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        lessonLessonFeedbackId
        lessonQuizId
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuiz = /* GraphQL */ `
  query GetQuiz($id: ID!) {
    getQuiz(id: $id) {
      id
      totalCorrectQuestions
      quizQuestions {
        items {
          id
          unit
          answer
          correctAnswer
          quizID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listQuizzes = /* GraphQL */ `
  query ListQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizzes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        totalCorrectQuestions
        quizQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuizzes = /* GraphQL */ `
  query SyncQuizzes(
    $filter: ModelQuizFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuizzes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        totalCorrectQuestions
        quizQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getQuizQuestion = /* GraphQL */ `
  query GetQuizQuestion($id: ID!) {
    getQuizQuestion(id: $id) {
      id
      unit
      answer
      correctAnswer
      quizID
      quiz {
        id
        totalCorrectQuestions
        quizQuestions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listQuizQuestions = /* GraphQL */ `
  query ListQuizQuestions(
    $filter: ModelQuizQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuizQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unit
        answer
        correctAnswer
        quizID
        quiz {
          id
          totalCorrectQuestions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncQuizQuestions = /* GraphQL */ `
  query SyncQuizQuestions(
    $filter: ModelQuizQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncQuizQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        unit
        answer
        correctAnswer
        quizID
        quiz {
          id
          totalCorrectQuestions
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getLessonFeedback = /* GraphQL */ `
  query GetLessonFeedback($id: ID!) {
    getLessonFeedback(id: $id) {
      id
      ranking
      comment
      averageRanking
      questions {
        items {
          id
          unit
          ranking
          lessonFeedbackID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listLessonFeedbacks = /* GraphQL */ `
  query ListLessonFeedbacks(
    $filter: ModelLessonFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ranking
        comment
        averageRanking
        questions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessonFeedbacks = /* GraphQL */ `
  query SyncLessonFeedbacks(
    $filter: ModelLessonFeedbackFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonFeedbacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ranking
        comment
        averageRanking
        questions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getLessonQuestion = /* GraphQL */ `
  query GetLessonQuestion($id: ID!) {
    getLessonQuestion(id: $id) {
      id
      unit
      ranking
      lessonFeedbackID
      lessonFeedback {
        id
        ranking
        comment
        averageRanking
        questions {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listLessonQuestions = /* GraphQL */ `
  query ListLessonQuestions(
    $filter: ModelLessonQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLessonQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        unit
        ranking
        lessonFeedbackID
        lessonFeedback {
          id
          ranking
          comment
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncLessonQuestions = /* GraphQL */ `
  query SyncLessonQuestions(
    $filter: ModelLessonQuestionFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncLessonQuestions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        unit
        ranking
        lessonFeedbackID
        lessonFeedback {
          id
          ranking
          comment
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCertificate = /* GraphQL */ `
  query GetCertificate($id: ID!) {
    getCertificate(id: $id) {
      id
      firstName
      lastName
      birthDate
      insuranceNr
      startDate
      endDate
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCertificates = /* GraphQL */ `
  query ListCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCertificates(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        birthDate
        insuranceNr
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCertificates = /* GraphQL */ `
  query SyncCertificates(
    $filter: ModelCertificateFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCertificates(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        firstName
        lastName
        birthDate
        insuranceNr
        startDate
        endDate
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPublicFeedback = /* GraphQL */ `
  query GetPublicFeedback($id: ID!) {
    getPublicFeedback(id: $id) {
      id
      ranking
      title
      comment
      reviewed
      publicFeedbackOverview {
        id
        totalRankings
        totalRankingStars
        averageRanking
        Feedbacks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      publicFeedbackOverviewID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPublicFeedbacks = /* GraphQL */ `
  query ListPublicFeedbacks(
    $filter: ModelPublicFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ranking
        title
        comment
        reviewed
        publicFeedbackOverview {
          id
          totalRankings
          totalRankingStars
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        publicFeedbackOverviewID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPublicFeedbacks = /* GraphQL */ `
  query SyncPublicFeedbacks(
    $filter: ModelPublicFeedbackFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicFeedbacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ranking
        title
        comment
        reviewed
        publicFeedbackOverview {
          id
          totalRankings
          totalRankingStars
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        publicFeedbackOverviewID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getPublicFeedbackOverview = /* GraphQL */ `
  query GetPublicFeedbackOverview($id: ID!) {
    getPublicFeedbackOverview(id: $id) {
      id
      totalRankings
      totalRankingStars
      averageRanking
      Feedbacks {
        items {
          id
          ranking
          title
          comment
          reviewed
          publicFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listPublicFeedbackOverviews = /* GraphQL */ `
  query ListPublicFeedbackOverviews(
    $filter: ModelPublicFeedbackOverviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublicFeedbackOverviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        totalRankings
        totalRankingStars
        averageRanking
        Feedbacks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPublicFeedbackOverviews = /* GraphQL */ `
  query SyncPublicFeedbackOverviews(
    $filter: ModelPublicFeedbackOverviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPublicFeedbackOverviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        totalRankings
        totalRankingStars
        averageRanking
        Feedbacks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourseFeedback = /* GraphQL */ `
  query GetCourseFeedback($id: ID!) {
    getCourseFeedback(id: $id) {
      id
      ranking
      comment
      courseFeedbackOverview {
        id
        totalRankings
        totalRankingStars
        averageRanking
        Feedbacks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      courseFeedbackOverviewID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCourseFeedbacks = /* GraphQL */ `
  query ListCourseFeedbacks(
    $filter: ModelCourseFeedbackFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseFeedbacks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ranking
        comment
        courseFeedbackOverview {
          id
          totalRankings
          totalRankingStars
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courseFeedbackOverviewID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourseFeedbacks = /* GraphQL */ `
  query SyncCourseFeedbacks(
    $filter: ModelCourseFeedbackFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseFeedbacks(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ranking
        comment
        courseFeedbackOverview {
          id
          totalRankings
          totalRankingStars
          averageRanking
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        courseFeedbackOverviewID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourseFeedbackOverview = /* GraphQL */ `
  query GetCourseFeedbackOverview($id: ID!) {
    getCourseFeedbackOverview(id: $id) {
      id
      totalRankings
      totalRankingStars
      averageRanking
      Feedbacks {
        items {
          id
          ranking
          comment
          courseFeedbackOverviewID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCourseFeedbackOverviews = /* GraphQL */ `
  query ListCourseFeedbackOverviews(
    $filter: ModelCourseFeedbackOverviewFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseFeedbackOverviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        totalRankings
        totalRankingStars
        averageRanking
        Feedbacks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourseFeedbackOverviews = /* GraphQL */ `
  query SyncCourseFeedbackOverviews(
    $filter: ModelCourseFeedbackOverviewFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseFeedbackOverviews(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        totalRankings
        totalRankingStars
        averageRanking
        Feedbacks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getGeneralStatistics = /* GraphQL */ `
  query GetGeneralStatistics($id: ID!) {
    getGeneralStatistics(id: $id) {
      id
      totalUsers
      purchasedCoursesCertified
      purchasedCoursesBasic
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listGeneralStatistics = /* GraphQL */ `
  query ListGeneralStatistics(
    $filter: ModelGeneralStatisticsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGeneralStatistics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        totalUsers
        purchasedCoursesCertified
        purchasedCoursesBasic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGeneralStatistics = /* GraphQL */ `
  query SyncGeneralStatistics(
    $filter: ModelGeneralStatisticsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGeneralStatistics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        totalUsers
        purchasedCoursesCertified
        purchasedCoursesBasic
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getCourseStatistic = /* GraphQL */ `
  query GetCourseStatistic($id: ID!) {
    getCourseStatistic(id: $id) {
      id
      averageInternalRanking
      totalRankings
      totalRankingStars
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listCourseStatistics = /* GraphQL */ `
  query ListCourseStatistics(
    $filter: ModelCourseStatisticFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCourseStatistics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        averageInternalRanking
        totalRankings
        totalRankingStars
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCourseStatistics = /* GraphQL */ `
  query SyncCourseStatistics(
    $filter: ModelCourseStatisticFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCourseStatistics(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        averageInternalRanking
        totalRankings
        totalRankingStars
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
