/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createInvoice = /* GraphQL */ `
  mutation CreateInvoice(
    $input: CreateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    createInvoice(input: $input, condition: $condition) {
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
export const updateInvoice = /* GraphQL */ `
  mutation UpdateInvoice(
    $input: UpdateInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    updateInvoice(input: $input, condition: $condition) {
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
export const deleteInvoice = /* GraphQL */ `
  mutation DeleteInvoice(
    $input: DeleteInvoiceInput!
    $condition: ModelInvoiceConditionInput
  ) {
    deleteInvoice(input: $input, condition: $condition) {
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
export const createCustomer = /* GraphQL */ `
  mutation CreateCustomer(
    $input: CreateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    createCustomer(input: $input, condition: $condition) {
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
export const updateCustomer = /* GraphQL */ `
  mutation UpdateCustomer(
    $input: UpdateCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    updateCustomer(input: $input, condition: $condition) {
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
export const deleteCustomer = /* GraphQL */ `
  mutation DeleteCustomer(
    $input: DeleteCustomerInput!
    $condition: ModelCustomerConditionInput
  ) {
    deleteCustomer(input: $input, condition: $condition) {
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
export const createConversation = /* GraphQL */ `
  mutation CreateConversation(
    $input: CreateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    createConversation(input: $input, condition: $condition) {
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
export const updateConversation = /* GraphQL */ `
  mutation UpdateConversation(
    $input: UpdateConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    updateConversation(input: $input, condition: $condition) {
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
export const deleteConversation = /* GraphQL */ `
  mutation DeleteConversation(
    $input: DeleteConversationInput!
    $condition: ModelConversationConditionInput
  ) {
    deleteConversation(input: $input, condition: $condition) {
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
export const createCart = /* GraphQL */ `
  mutation CreateCart(
    $input: CreateCartInput!
    $condition: ModelCartConditionInput
  ) {
    createCart(input: $input, condition: $condition) {
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
export const updateCart = /* GraphQL */ `
  mutation UpdateCart(
    $input: UpdateCartInput!
    $condition: ModelCartConditionInput
  ) {
    updateCart(input: $input, condition: $condition) {
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
export const deleteCart = /* GraphQL */ `
  mutation DeleteCart(
    $input: DeleteCartInput!
    $condition: ModelCartConditionInput
  ) {
    deleteCart(input: $input, condition: $condition) {
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
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
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
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
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
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
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
export const createCourse = /* GraphQL */ `
  mutation CreateCourse(
    $input: CreateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    createCourse(input: $input, condition: $condition) {
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
export const updateCourse = /* GraphQL */ `
  mutation UpdateCourse(
    $input: UpdateCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    updateCourse(input: $input, condition: $condition) {
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
export const deleteCourse = /* GraphQL */ `
  mutation DeleteCourse(
    $input: DeleteCourseInput!
    $condition: ModelCourseConditionInput
  ) {
    deleteCourse(input: $input, condition: $condition) {
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
export const createLesson = /* GraphQL */ `
  mutation CreateLesson(
    $input: CreateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    createLesson(input: $input, condition: $condition) {
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
export const updateLesson = /* GraphQL */ `
  mutation UpdateLesson(
    $input: UpdateLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    updateLesson(input: $input, condition: $condition) {
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
export const deleteLesson = /* GraphQL */ `
  mutation DeleteLesson(
    $input: DeleteLessonInput!
    $condition: ModelLessonConditionInput
  ) {
    deleteLesson(input: $input, condition: $condition) {
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
export const createQuiz = /* GraphQL */ `
  mutation CreateQuiz(
    $input: CreateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    createQuiz(input: $input, condition: $condition) {
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
export const updateQuiz = /* GraphQL */ `
  mutation UpdateQuiz(
    $input: UpdateQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    updateQuiz(input: $input, condition: $condition) {
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
export const deleteQuiz = /* GraphQL */ `
  mutation DeleteQuiz(
    $input: DeleteQuizInput!
    $condition: ModelQuizConditionInput
  ) {
    deleteQuiz(input: $input, condition: $condition) {
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
export const createQuizQuestion = /* GraphQL */ `
  mutation CreateQuizQuestion(
    $input: CreateQuizQuestionInput!
    $condition: ModelQuizQuestionConditionInput
  ) {
    createQuizQuestion(input: $input, condition: $condition) {
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
export const updateQuizQuestion = /* GraphQL */ `
  mutation UpdateQuizQuestion(
    $input: UpdateQuizQuestionInput!
    $condition: ModelQuizQuestionConditionInput
  ) {
    updateQuizQuestion(input: $input, condition: $condition) {
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
export const deleteQuizQuestion = /* GraphQL */ `
  mutation DeleteQuizQuestion(
    $input: DeleteQuizQuestionInput!
    $condition: ModelQuizQuestionConditionInput
  ) {
    deleteQuizQuestion(input: $input, condition: $condition) {
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
export const createLessonFeedback = /* GraphQL */ `
  mutation CreateLessonFeedback(
    $input: CreateLessonFeedbackInput!
    $condition: ModelLessonFeedbackConditionInput
  ) {
    createLessonFeedback(input: $input, condition: $condition) {
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
export const updateLessonFeedback = /* GraphQL */ `
  mutation UpdateLessonFeedback(
    $input: UpdateLessonFeedbackInput!
    $condition: ModelLessonFeedbackConditionInput
  ) {
    updateLessonFeedback(input: $input, condition: $condition) {
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
export const deleteLessonFeedback = /* GraphQL */ `
  mutation DeleteLessonFeedback(
    $input: DeleteLessonFeedbackInput!
    $condition: ModelLessonFeedbackConditionInput
  ) {
    deleteLessonFeedback(input: $input, condition: $condition) {
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
export const createLessonQuestion = /* GraphQL */ `
  mutation CreateLessonQuestion(
    $input: CreateLessonQuestionInput!
    $condition: ModelLessonQuestionConditionInput
  ) {
    createLessonQuestion(input: $input, condition: $condition) {
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
export const updateLessonQuestion = /* GraphQL */ `
  mutation UpdateLessonQuestion(
    $input: UpdateLessonQuestionInput!
    $condition: ModelLessonQuestionConditionInput
  ) {
    updateLessonQuestion(input: $input, condition: $condition) {
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
export const deleteLessonQuestion = /* GraphQL */ `
  mutation DeleteLessonQuestion(
    $input: DeleteLessonQuestionInput!
    $condition: ModelLessonQuestionConditionInput
  ) {
    deleteLessonQuestion(input: $input, condition: $condition) {
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
export const createCertificate = /* GraphQL */ `
  mutation CreateCertificate(
    $input: CreateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    createCertificate(input: $input, condition: $condition) {
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
export const updateCertificate = /* GraphQL */ `
  mutation UpdateCertificate(
    $input: UpdateCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    updateCertificate(input: $input, condition: $condition) {
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
export const deleteCertificate = /* GraphQL */ `
  mutation DeleteCertificate(
    $input: DeleteCertificateInput!
    $condition: ModelCertificateConditionInput
  ) {
    deleteCertificate(input: $input, condition: $condition) {
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
export const createPublicFeedback = /* GraphQL */ `
  mutation CreatePublicFeedback(
    $input: CreatePublicFeedbackInput!
    $condition: ModelPublicFeedbackConditionInput
  ) {
    createPublicFeedback(input: $input, condition: $condition) {
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
export const updatePublicFeedback = /* GraphQL */ `
  mutation UpdatePublicFeedback(
    $input: UpdatePublicFeedbackInput!
    $condition: ModelPublicFeedbackConditionInput
  ) {
    updatePublicFeedback(input: $input, condition: $condition) {
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
export const deletePublicFeedback = /* GraphQL */ `
  mutation DeletePublicFeedback(
    $input: DeletePublicFeedbackInput!
    $condition: ModelPublicFeedbackConditionInput
  ) {
    deletePublicFeedback(input: $input, condition: $condition) {
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
export const createPublicFeedbackOverview = /* GraphQL */ `
  mutation CreatePublicFeedbackOverview(
    $input: CreatePublicFeedbackOverviewInput!
    $condition: ModelPublicFeedbackOverviewConditionInput
  ) {
    createPublicFeedbackOverview(input: $input, condition: $condition) {
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
export const updatePublicFeedbackOverview = /* GraphQL */ `
  mutation UpdatePublicFeedbackOverview(
    $input: UpdatePublicFeedbackOverviewInput!
    $condition: ModelPublicFeedbackOverviewConditionInput
  ) {
    updatePublicFeedbackOverview(input: $input, condition: $condition) {
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
export const deletePublicFeedbackOverview = /* GraphQL */ `
  mutation DeletePublicFeedbackOverview(
    $input: DeletePublicFeedbackOverviewInput!
    $condition: ModelPublicFeedbackOverviewConditionInput
  ) {
    deletePublicFeedbackOverview(input: $input, condition: $condition) {
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
export const createCourseFeedback = /* GraphQL */ `
  mutation CreateCourseFeedback(
    $input: CreateCourseFeedbackInput!
    $condition: ModelCourseFeedbackConditionInput
  ) {
    createCourseFeedback(input: $input, condition: $condition) {
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
export const updateCourseFeedback = /* GraphQL */ `
  mutation UpdateCourseFeedback(
    $input: UpdateCourseFeedbackInput!
    $condition: ModelCourseFeedbackConditionInput
  ) {
    updateCourseFeedback(input: $input, condition: $condition) {
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
export const deleteCourseFeedback = /* GraphQL */ `
  mutation DeleteCourseFeedback(
    $input: DeleteCourseFeedbackInput!
    $condition: ModelCourseFeedbackConditionInput
  ) {
    deleteCourseFeedback(input: $input, condition: $condition) {
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
export const createCourseFeedbackOverview = /* GraphQL */ `
  mutation CreateCourseFeedbackOverview(
    $input: CreateCourseFeedbackOverviewInput!
    $condition: ModelCourseFeedbackOverviewConditionInput
  ) {
    createCourseFeedbackOverview(input: $input, condition: $condition) {
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
export const updateCourseFeedbackOverview = /* GraphQL */ `
  mutation UpdateCourseFeedbackOverview(
    $input: UpdateCourseFeedbackOverviewInput!
    $condition: ModelCourseFeedbackOverviewConditionInput
  ) {
    updateCourseFeedbackOverview(input: $input, condition: $condition) {
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
export const deleteCourseFeedbackOverview = /* GraphQL */ `
  mutation DeleteCourseFeedbackOverview(
    $input: DeleteCourseFeedbackOverviewInput!
    $condition: ModelCourseFeedbackOverviewConditionInput
  ) {
    deleteCourseFeedbackOverview(input: $input, condition: $condition) {
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
export const createGeneralStatistics = /* GraphQL */ `
  mutation CreateGeneralStatistics(
    $input: CreateGeneralStatisticsInput!
    $condition: ModelGeneralStatisticsConditionInput
  ) {
    createGeneralStatistics(input: $input, condition: $condition) {
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
export const updateGeneralStatistics = /* GraphQL */ `
  mutation UpdateGeneralStatistics(
    $input: UpdateGeneralStatisticsInput!
    $condition: ModelGeneralStatisticsConditionInput
  ) {
    updateGeneralStatistics(input: $input, condition: $condition) {
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
export const deleteGeneralStatistics = /* GraphQL */ `
  mutation DeleteGeneralStatistics(
    $input: DeleteGeneralStatisticsInput!
    $condition: ModelGeneralStatisticsConditionInput
  ) {
    deleteGeneralStatistics(input: $input, condition: $condition) {
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
export const createCourseStatistic = /* GraphQL */ `
  mutation CreateCourseStatistic(
    $input: CreateCourseStatisticInput!
    $condition: ModelCourseStatisticConditionInput
  ) {
    createCourseStatistic(input: $input, condition: $condition) {
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
export const updateCourseStatistic = /* GraphQL */ `
  mutation UpdateCourseStatistic(
    $input: UpdateCourseStatisticInput!
    $condition: ModelCourseStatisticConditionInput
  ) {
    updateCourseStatistic(input: $input, condition: $condition) {
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
export const deleteCourseStatistic = /* GraphQL */ `
  mutation DeleteCourseStatistic(
    $input: DeleteCourseStatisticInput!
    $condition: ModelCourseStatisticConditionInput
  ) {
    deleteCourseStatistic(input: $input, condition: $condition) {
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
