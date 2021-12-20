/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateInvoice = /* GraphQL */ `
  subscription OnCreateInvoice($owner: String) {
    onCreateInvoice(owner: $owner) {
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
export const onUpdateInvoice = /* GraphQL */ `
  subscription OnUpdateInvoice($owner: String) {
    onUpdateInvoice(owner: $owner) {
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
export const onDeleteInvoice = /* GraphQL */ `
  subscription OnDeleteInvoice($owner: String) {
    onDeleteInvoice(owner: $owner) {
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
export const onCreateCustomer = /* GraphQL */ `
  subscription OnCreateCustomer($owner: String) {
    onCreateCustomer(owner: $owner) {
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
export const onUpdateCustomer = /* GraphQL */ `
  subscription OnUpdateCustomer($owner: String) {
    onUpdateCustomer(owner: $owner) {
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
export const onDeleteCustomer = /* GraphQL */ `
  subscription OnDeleteCustomer($owner: String) {
    onDeleteCustomer(owner: $owner) {
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
export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation($owner: String) {
    onCreateConversation(owner: $owner) {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation($owner: String) {
    onUpdateConversation(owner: $owner) {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation($owner: String) {
    onDeleteConversation(owner: $owner) {
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
export const onCreateCart = /* GraphQL */ `
  subscription OnCreateCart($owner: String) {
    onCreateCart(owner: $owner) {
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
export const onUpdateCart = /* GraphQL */ `
  subscription OnUpdateCart($owner: String) {
    onUpdateCart(owner: $owner) {
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
export const onDeleteCart = /* GraphQL */ `
  subscription OnDeleteCart($owner: String) {
    onDeleteCart(owner: $owner) {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct($owner: String) {
    onCreateProduct(owner: $owner) {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct($owner: String) {
    onUpdateProduct(owner: $owner) {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct($owner: String) {
    onDeleteProduct(owner: $owner) {
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
export const onCreateCourse = /* GraphQL */ `
  subscription OnCreateCourse($owner: String) {
    onCreateCourse(owner: $owner) {
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
export const onUpdateCourse = /* GraphQL */ `
  subscription OnUpdateCourse($owner: String) {
    onUpdateCourse(owner: $owner) {
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
export const onDeleteCourse = /* GraphQL */ `
  subscription OnDeleteCourse($owner: String) {
    onDeleteCourse(owner: $owner) {
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
export const onCreateLesson = /* GraphQL */ `
  subscription OnCreateLesson($owner: String) {
    onCreateLesson(owner: $owner) {
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
export const onUpdateLesson = /* GraphQL */ `
  subscription OnUpdateLesson($owner: String) {
    onUpdateLesson(owner: $owner) {
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
export const onDeleteLesson = /* GraphQL */ `
  subscription OnDeleteLesson($owner: String) {
    onDeleteLesson(owner: $owner) {
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
export const onCreateQuiz = /* GraphQL */ `
  subscription OnCreateQuiz($owner: String) {
    onCreateQuiz(owner: $owner) {
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
export const onUpdateQuiz = /* GraphQL */ `
  subscription OnUpdateQuiz($owner: String) {
    onUpdateQuiz(owner: $owner) {
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
export const onDeleteQuiz = /* GraphQL */ `
  subscription OnDeleteQuiz($owner: String) {
    onDeleteQuiz(owner: $owner) {
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
export const onCreateQuizQuestion = /* GraphQL */ `
  subscription OnCreateQuizQuestion($owner: String) {
    onCreateQuizQuestion(owner: $owner) {
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
export const onUpdateQuizQuestion = /* GraphQL */ `
  subscription OnUpdateQuizQuestion($owner: String) {
    onUpdateQuizQuestion(owner: $owner) {
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
export const onDeleteQuizQuestion = /* GraphQL */ `
  subscription OnDeleteQuizQuestion($owner: String) {
    onDeleteQuizQuestion(owner: $owner) {
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
export const onCreateLessonFeedback = /* GraphQL */ `
  subscription OnCreateLessonFeedback($owner: String) {
    onCreateLessonFeedback(owner: $owner) {
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
export const onUpdateLessonFeedback = /* GraphQL */ `
  subscription OnUpdateLessonFeedback($owner: String) {
    onUpdateLessonFeedback(owner: $owner) {
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
export const onDeleteLessonFeedback = /* GraphQL */ `
  subscription OnDeleteLessonFeedback($owner: String) {
    onDeleteLessonFeedback(owner: $owner) {
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
export const onCreateLessonQuestion = /* GraphQL */ `
  subscription OnCreateLessonQuestion($owner: String) {
    onCreateLessonQuestion(owner: $owner) {
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
export const onUpdateLessonQuestion = /* GraphQL */ `
  subscription OnUpdateLessonQuestion($owner: String) {
    onUpdateLessonQuestion(owner: $owner) {
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
export const onDeleteLessonQuestion = /* GraphQL */ `
  subscription OnDeleteLessonQuestion($owner: String) {
    onDeleteLessonQuestion(owner: $owner) {
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
export const onCreateCertificate = /* GraphQL */ `
  subscription OnCreateCertificate($owner: String) {
    onCreateCertificate(owner: $owner) {
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
export const onUpdateCertificate = /* GraphQL */ `
  subscription OnUpdateCertificate($owner: String) {
    onUpdateCertificate(owner: $owner) {
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
export const onDeleteCertificate = /* GraphQL */ `
  subscription OnDeleteCertificate($owner: String) {
    onDeleteCertificate(owner: $owner) {
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
export const onCreatePublicFeedback = /* GraphQL */ `
  subscription OnCreatePublicFeedback($owner: String) {
    onCreatePublicFeedback(owner: $owner) {
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
export const onUpdatePublicFeedback = /* GraphQL */ `
  subscription OnUpdatePublicFeedback($owner: String) {
    onUpdatePublicFeedback(owner: $owner) {
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
export const onDeletePublicFeedback = /* GraphQL */ `
  subscription OnDeletePublicFeedback($owner: String) {
    onDeletePublicFeedback(owner: $owner) {
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
export const onCreatePublicFeedbackOverview = /* GraphQL */ `
  subscription OnCreatePublicFeedbackOverview($owner: String) {
    onCreatePublicFeedbackOverview(owner: $owner) {
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
export const onUpdatePublicFeedbackOverview = /* GraphQL */ `
  subscription OnUpdatePublicFeedbackOverview($owner: String) {
    onUpdatePublicFeedbackOverview(owner: $owner) {
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
export const onDeletePublicFeedbackOverview = /* GraphQL */ `
  subscription OnDeletePublicFeedbackOverview($owner: String) {
    onDeletePublicFeedbackOverview(owner: $owner) {
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
export const onCreateCourseFeedback = /* GraphQL */ `
  subscription OnCreateCourseFeedback($owner: String) {
    onCreateCourseFeedback(owner: $owner) {
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
export const onUpdateCourseFeedback = /* GraphQL */ `
  subscription OnUpdateCourseFeedback($owner: String) {
    onUpdateCourseFeedback(owner: $owner) {
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
export const onDeleteCourseFeedback = /* GraphQL */ `
  subscription OnDeleteCourseFeedback($owner: String) {
    onDeleteCourseFeedback(owner: $owner) {
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
export const onCreateCourseFeedbackOverview = /* GraphQL */ `
  subscription OnCreateCourseFeedbackOverview($owner: String) {
    onCreateCourseFeedbackOverview(owner: $owner) {
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
export const onUpdateCourseFeedbackOverview = /* GraphQL */ `
  subscription OnUpdateCourseFeedbackOverview($owner: String) {
    onUpdateCourseFeedbackOverview(owner: $owner) {
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
export const onDeleteCourseFeedbackOverview = /* GraphQL */ `
  subscription OnDeleteCourseFeedbackOverview($owner: String) {
    onDeleteCourseFeedbackOverview(owner: $owner) {
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
export const onCreateGeneralStatistics = /* GraphQL */ `
  subscription OnCreateGeneralStatistics($owner: String) {
    onCreateGeneralStatistics(owner: $owner) {
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
export const onUpdateGeneralStatistics = /* GraphQL */ `
  subscription OnUpdateGeneralStatistics($owner: String) {
    onUpdateGeneralStatistics(owner: $owner) {
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
export const onDeleteGeneralStatistics = /* GraphQL */ `
  subscription OnDeleteGeneralStatistics($owner: String) {
    onDeleteGeneralStatistics(owner: $owner) {
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
export const onCreateCourseStatistic = /* GraphQL */ `
  subscription OnCreateCourseStatistic($owner: String) {
    onCreateCourseStatistic(owner: $owner) {
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
export const onUpdateCourseStatistic = /* GraphQL */ `
  subscription OnUpdateCourseStatistic($owner: String) {
    onUpdateCourseStatistic(owner: $owner) {
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
export const onDeleteCourseStatistic = /* GraphQL */ `
  subscription OnDeleteCourseStatistic($owner: String) {
    onDeleteCourseStatistic(owner: $owner) {
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
