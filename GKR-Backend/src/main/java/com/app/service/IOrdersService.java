package com.app.service;

import com.app.pojos.Orders;

public interface IOrdersService {

    Orders createOrder(int customerId, int homeMakerId, String amount) throws Exception;

    Orders updatePaymentStatus(String paymentId, String orderId, String status, String receipt);
}
