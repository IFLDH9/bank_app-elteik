INSERT INTO account (name, created_at, account_number, balance) VALUES ('elso tulajdonos', CURRENT_TIMESTAMP(), '33334444 55556666', 999999);
INSERT INTO account (name, created_at, account_number, balance) VALUES ('joe', CURRENT_TIMESTAMP(), '11112222 333344444', 1);
INSERT INTO card (card_number, card_type, expiration_date, owner_name, account_id) VALUES ('1234 5678 9101 1121', 'MASTERCARD', '2020-03-02', 'elso tulajdonos', 1);
INSERT INTO personal_data(name, date_of_birth, id_card_number) VALUES ('elso tulajdonos', '1991-01-01', 'MM12345');
INSERT INTO account_owners(accounts_id, owners_id) VALUES (1,1);
INSERT INTO transaction (date_of_transaction, source_account_number, source_account_owner_name, target_account_number, target_account_owner_name, value, source_account_id, target_account_id) 
							VALUES (current_timestamp(), '33334444 55556666', 'elso tulajdonos', '11112222 333344444', 'joe', 2, 2, 1);
