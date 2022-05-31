## To Test StorageClass reclaim policy

1. Run the following to add the database passwords as secrets (replace with your database credentials):

   `kubectl create secret generic database --from-literal=db_host=xxxxx --from-literal=db_user=xxxxx --from-literal=db_password=xxxxx --from-literal=db_name=xxxxx`

2. Start everything

   `kubectl apply -f .k8s`

3. Wait until all the pods are available (check via http://localhost)
4. Delete everything else: `kubectl delete -f .k8s`
