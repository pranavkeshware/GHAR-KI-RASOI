package com.app.pojos;

import java.time.LocalDateTime;
import javax.persistence.*;

@Entity
@Table(name = "orders")
public class Orders extends BaseEntity {

    @Column(name = "order_amount_paise")
    private String amount; // amount in paise

    @Column(name = "order_id", unique = true, nullable = false)
    private String orderId;

    @Column(name = "payment_id")
    private String paymentId;

    private String receipt;

    @Enumerated(EnumType.STRING)
    private PaymentStatus status;

    @Column(name = "payment_method")
    private String paymentMethod;

    private String currency;

    @Column(name = "gateway_response", columnDefinition = "TEXT")
    private String gatewayResponse;

    @Column(name = "date_time")
    private LocalDateTime dateTime;

    @Column(name = "customer_id", nullable = false)
    private int customerId;

    @Column(name = "home_maker_id", nullable = false)
    private int homeMakerId;

    // Getters and Setters
    
    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(String paymentId) {
        this.paymentId = paymentId;
    }

    public String getReceipt() {
        return receipt;
    }

    public void setReceipt(String receipt) {
        this.receipt = receipt;
    }

    public PaymentStatus getStatus() {
        return status;
    }

    public void setStatus(PaymentStatus status) {
        this.status = status;
    }

    public String getPaymentMethod() {
        return paymentMethod;
    }

    public void setPaymentMethod(String paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    public String getCurrency() {
        return currency;
    }

    public void setCurrency(String currency) {
        this.currency = currency;
    }

    public String getGatewayResponse() {
        return gatewayResponse;
    }

    public void setGatewayResponse(String gatewayResponse) {
        this.gatewayResponse = gatewayResponse;
    }

    public LocalDateTime getDateTime() {
        return dateTime;
    }

    public void setDateTime() {
        this.dateTime = LocalDateTime.now();
    }

    public int getCustomerId() {
        return customerId;
    }

    public void setCustomerId(int customerId) {
        this.customerId = customerId;
    }

    public int getHomeMakerId() {
        return homeMakerId;
    }

    public void setHomeMakerId(int homeMakerId) {
        this.homeMakerId = homeMakerId;
    }

    @Override
    public String toString() {
        return "Orders [amount=" + amount + ", orderId=" + orderId + ", paymentId=" + paymentId + ", receipt=" + receipt
                + ", status=" + status + ", paymentMethod=" + paymentMethod + ", currency=" + currency
                + ", gatewayResponse=" + gatewayResponse + ", dateTime=" + dateTime + ", customerId=" + customerId
                + ", homeMakerId=" + homeMakerId + "]";
    }
}

